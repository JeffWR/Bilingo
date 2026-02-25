<script lang="ts">
	import { page } from '$app/state';
	import { fetchFormat, fetchData } from '$lib/api/conversation';
	import InteractionCard from '$lib/components/InteractionCard.svelte';
	import ChoiceChip from '$lib/components/ChoiceChip.svelte';
	import Button from '$lib/components/Button.svelte';
	import type { FormatSchema, ConversationData } from '$lib/types/schema';

	// ── Load state ────────────────────────────
	type LoadState =
		| { status: 'loading' }
		| { status: 'ready'; format: FormatSchema; data: ConversationData }
		| { status: 'error'; message: string };

	let load = $state<LoadState>({ status: 'loading' });

	$effect(() => {
		const id = page.params.id!;
		load = { status: 'loading' };
		Promise.all([fetchFormat(id), fetchData(id)])
			.then(([format, data]) => {
				load = { status: 'ready', format, data };
			})
			.catch((err: Error) => {
				load = { status: 'error', message: err.message };
			});
	});

	// ── Step state ────────────────────────────
	let currentStep = $state(0);
	let selectedId = $state<string | null>(null);
	let done = $state(false);

	const totalSteps = $derived(load.status === 'ready' ? load.data.steps.length : 0);
	const step = $derived(load.status === 'ready' ? load.data.steps[currentStep] : null);
	const progress = $derived(totalSteps > 0 ? Math.round(((currentStep + 1) / totalSteps) * 100) : 0);

	function select(choiceId: string) {
		selectedId = choiceId;
	}

	function next() {
		if (currentStep < totalSteps - 1) {
			currentStep += 1;
			selectedId = null;
		} else {
			done = true;
		}
	}

	function restart() {
		currentStep = 0;
		selectedId = null;
		done = false;
	}
</script>

<div class="shell">

	{#if load.status === 'loading'}

		<!-- Loading state -->
		<div class="loading">
			<div class="spinner"></div>
			<p class="loading-label">Loading conversation…</p>
		</div>

	{:else if load.status === 'error'}

		<!-- Error state -->
		<div class="error">
			<p class="error-title">Something went wrong</p>
			<p class="error-msg">{load.message}</p>
			<a href="/conversation" class="error-back">← Back to conversations</a>
		</div>

	{:else if done}

		<!-- Done state -->
		<div class="done">
			<p class="done-label">Complete</p>
			<h2 class="done-title">{load.data.title}</h2>
			<p class="done-sub">All {totalSteps} steps finished.</p>
			<div class="done-actions">
				<Button variant="primary" onclick={restart}>Restart</Button>
				<Button variant="ghost" onclick={() => (window.location.href = '/conversation')}>
					All Conversations
				</Button>
			</div>
		</div>

	{:else if step}

		<!-- Top bar -->
		<div class="top-bar">
			<a href="/conversation" class="close-btn" aria-label="Exit">✕</a>
			<div class="progress-wrap" role="progressbar" aria-valuenow={progress} aria-valuemax={100}>
				<div class="progress-bar" style="width: {progress}%"></div>
			</div>
			<span class="step-count">{currentStep + 1} / {totalSteps}</span>
		</div>

		<!-- Step view -->
		<div class="view">

			<div class="step-meta">
				<span class="step-unit">{load.data.title} · Step {currentStep + 1} of {totalSteps}</span>
			</div>

			<p class="question">{step.question}</p>

			<InteractionCard icon={step.icon} scenario={step.description} />

			<p class="prompt-label">Choose your response:</p>

			<div class="choices">
				{#each step.choices as choice}
					<ChoiceChip
						text={choice.label}
						state={selectedId === choice.id ? 'selected' : 'default'}
						onclick={() => select(choice.id)}
					/>
				{/each}
			</div>

			{#if selectedId !== null}
				<div class="continue">
					<Button variant="primary" onclick={next}>
						{currentStep < totalSteps - 1 ? 'Continue →' : 'Finish'}
					</Button>
				</div>
			{/if}

		</div>

	{/if}

</div>

<style>
	/* ── Shell ──────────────────────────────── */
	.shell {
		min-height: calc(100vh - var(--nav-height));
		display: flex;
		flex-direction: column;
		background: var(--bg-page);
	}

	/* ── Loading ────────────────────────────── */
	.loading {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 16px;
	}

	.spinner {
		width: 36px;
		height: 36px;
		border: 3px solid var(--border-ph);
		border-top-color: var(--accent);
		border-radius: 50%;
		animation: spin 0.7s linear infinite;
	}

	@keyframes spin {
		to { transform: rotate(360deg); }
	}

	.loading-label {
		font-size: 0.88rem;
		font-weight: 700;
		color: var(--text-muted);
	}

	/* ── Error ──────────────────────────────── */
	.error {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;
		text-align: center;
		padding: 40px 24px;
	}

	.error-title {
		font-size: 1.1rem;
		font-weight: 900;
		color: var(--text);
	}

	.error-msg {
		font-size: 0.88rem;
		font-weight: 600;
		color: var(--text-secondary);
	}

	.error-back {
		margin-top: 8px;
		font-size: 0.88rem;
		font-weight: 800;
		color: var(--accent);
		text-transform: uppercase;
		letter-spacing: 0.4px;
	}

	/* ── Top Bar ────────────────────────────── */
	.top-bar {
		display: flex;
		align-items: center;
		gap: 16px;
		padding: 16px var(--page-padding-x);
	}

	.close-btn {
		font-size: 1rem;
		font-weight: 900;
		color: var(--text-dim);
		flex-shrink: 0;
		transition: color 0.15s ease;
	}

	.close-btn:hover {
		color: var(--text);
	}

	.progress-wrap {
		flex: 1;
		height: 12px;
		background: var(--border-ph);
		border-radius: var(--radius-pill);
		overflow: hidden;
	}

	.progress-bar {
		height: 100%;
		background: var(--accent);
		border-radius: var(--radius-pill);
		transition: width 0.4s ease;
	}

	.step-count {
		font-size: 0.8rem;
		font-weight: 800;
		color: var(--text-muted);
		flex-shrink: 0;
	}

	/* ── Step view ──────────────────────────── */
	.view {
		flex: 1;
		display: flex;
		flex-direction: column;
		max-width: 600px;
		width: 100%;
		margin: 0 auto;
		padding: 8px var(--page-padding-x) var(--page-padding-y);
		gap: 16px;
	}

	.step-meta {
		display: flex;
		align-items: center;
	}

	.step-unit {
		font-size: 0.78rem;
		font-weight: 800;
		color: var(--text-secondary);
		text-transform: uppercase;
		letter-spacing: 0.6px;
	}

	.question {
		font-size: 1.1rem;
		font-weight: 900;
		color: var(--text);
		letter-spacing: -0.3px;
	}

	.prompt-label {
		font-size: 0.78rem;
		font-weight: 800;
		color: var(--text-secondary);
		text-transform: uppercase;
		letter-spacing: 0.6px;
	}

	.choices {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.continue {
		margin-top: 8px;
	}

	/* ── Done state ─────────────────────────── */
	.done {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 40px 24px;
		gap: 12px;
		max-width: 480px;
		width: 100%;
		margin: 0 auto;
	}

	.done-label {
		font-size: 0.78rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.8px;
		color: var(--accent);
	}

	.done-title {
		font-size: 2.2rem;
		font-weight: 900;
		color: var(--text);
		letter-spacing: -0.5px;
	}

	.done-sub {
		font-size: 0.95rem;
		font-weight: 600;
		color: var(--text-secondary);
		line-height: 1.5;
		margin-bottom: 8px;
	}

	.done-actions {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	/* ── Responsive ─────────────────────────── */
	@media (max-width: 600px) {
		.view { padding: 8px var(--page-padding-x) var(--page-padding-y); }
		.done { padding: 32px var(--page-padding-x); }
	}
</style>
