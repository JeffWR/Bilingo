<script lang="ts">
	import { conversations } from '$lib/data/conversations';
</script>

<div class="shell">

	<div class="header">
		<h1 class="title">Conversations</h1>
		<p class="subtitle">Choose a topic to begin.</p>
	</div>

	<div class="grid">
		{#each conversations as item}
			<a href="/conversation/{item.id}" class="card">
				<div class="card-inner">
					<p class="card-tag">{item.tag}</p>
					<h2 class="card-title">{item.title}</h2>
					<p class="card-desc">{item.description}</p>
				</div>
				<span class="card-cta">Begin →</span>
			</a>
		{/each}
	</div>

</div>

<style>
	/* ── Shell ──────────────────────────────── */
	.shell {
		min-height: calc(100vh - var(--nav-height));
		display: flex;
		flex-direction: column;
		background: var(--bg-page);
		max-width: 720px;
		width: 100%;
		margin: 0 auto;
		padding: var(--page-padding-y) var(--page-padding-x) 60px;
		gap: 32px;
	}

	/* ── Header ─────────────────────────────── */
	.header {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.title {
		font-size: 2rem;
		font-weight: 900;
		color: var(--text);
		letter-spacing: -0.5px;
	}

	.subtitle {
		font-size: 0.95rem;
		font-weight: 600;
		color: var(--text-secondary);
	}

	/* ── Grid ───────────────────────────────── */
	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 16px;
	}

	/* ── Card ───────────────────────────────── */
	.card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background: var(--bg-card);
		border: 1.5px solid var(--border);
		border-radius: var(--radius-card);
		padding: 20px;
		gap: 20px;
		transition:
			transform 0.15s ease,
			box-shadow 0.15s ease,
			border-color 0.15s ease;
		cursor: pointer;
	}

	.card:hover {
		transform: translateY(-3px);
		box-shadow: var(--shadow-card-hover);
		border-color: var(--text-dim);
	}

	.card-inner {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.card-tag {
		font-size: 0.72rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.6px;
		color: var(--text-muted);
	}

	.card-title {
		font-size: 1.15rem;
		font-weight: 900;
		color: var(--text);
		letter-spacing: -0.3px;
	}

	.card-desc {
		font-size: 0.88rem;
		font-weight: 600;
		color: var(--text-secondary);
		line-height: 1.5;
	}

	.card-cta {
		font-size: 0.85rem;
		font-weight: 900;
		color: var(--accent);
		text-transform: uppercase;
		letter-spacing: 0.4px;
	}

	/* ── Responsive ─────────────────────────── */
	@media (max-width: 600px) {
		.shell { padding: 24px var(--page-padding-x) 48px; }
		.grid { grid-template-columns: 1fr; }
	}
</style>
