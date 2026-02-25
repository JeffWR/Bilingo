<div class="shell">

	<!-- Top Bar -->
	<div class="top-bar">
		<a href="/" class="close-btn">✕</a>
		<div class="progress-wrap">
			<div class="progress-bar"></div>
		</div>
	</div>

	<!-- Main -->
	<div class="view">

		<!-- Step label placeholders -->
		<div class="step-label">
			<div class="ph ph--sm ph--w40"></div>
			<div class="ph ph--sm ph--w20"></div>
		</div>

		<!-- Interaction card placeholder -->
		<div class="card">
			<div class="card-icon-ph"></div>
			<div class="ph ph--md ph--w80" style="margin: 0 auto 10px;"></div>
			<div class="ph ph--md ph--w60" style="margin: 0 auto;"></div>
		</div>

		<!-- Prompt placeholder -->
		<div class="ph ph--sm ph--w30"></div>

		<!-- Choice chips placeholders -->
		<div class="choices">
			<div class="chip-ph"></div>
			<div class="chip-ph"></div>
			<div class="chip-ph"></div>
			<div class="chip-ph"></div>
		</div>

	</div>
</div>

<style>
	/* ── Shell ──────────────────────────────── */
	.shell {
		min-height: calc(100vh - var(--nav-height));
		display: flex;
		flex-direction: column;
		background: var(--bg-page);
	}

	/* ── Top Bar ────────────────────────────── */
	.top-bar {
		display: flex;
		align-items: center;
		gap: 16px;
		padding: 16px 24px;
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
		height: 14px;
		background: var(--border-ph);
		border-radius: var(--radius-pill);
		overflow: hidden;
	}

	.progress-bar {
		height: 100%;
		width: 0%;
		background: var(--border-ph);
		border-radius: var(--radius-pill);
	}

	/* ── View ───────────────────────────────── */
	.view {
		flex: 1;
		display: flex;
		flex-direction: column;
		max-width: 600px;
		width: 100%;
		margin: 0 auto;
		padding: 8px 24px 40px;
		gap: 16px;
	}

	/* ── Generic placeholder block ──────────── */
	.ph {
		background: var(--border-ph);
		border-radius: var(--radius-sm);
		animation: pulse 1.8s ease-in-out infinite;
	}

	.ph--sm  { height: 12px; }
	.ph--md  { height: 16px; }
	.ph--w20 { width: 20%; }
	.ph--w30 { width: 30%; }
	.ph--w40 { width: 40%; }
	.ph--w60 { width: 60%; }
	.ph--w80 { width: 80%; }

	/* ── Step label ─────────────────────────── */
	.step-label {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	/* ── Card ───────────────────────────────── */
	.card {
		background: var(--bg-card);
		border-radius: var(--radius-card);
		padding: 32px 24px 28px;
		border: 1.5px solid var(--border);
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}

	.card-icon-ph {
		width: 52px;
		height: 52px;
		background: var(--border-ph);
		border-radius: var(--radius-btn);
		margin: 0 auto 20px;
		animation: pulse 1.8s ease-in-out infinite;
	}

	/* ── Choice chips ───────────────────────── */
	.choices {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.chip-ph {
		height: 54px;
		background: var(--bg-card);
		border: 2px solid var(--border-ph);
		border-radius: var(--radius-chip);
		animation: pulse 1.8s ease-in-out infinite;
	}

	.chip-ph:nth-child(2) { animation-delay: 0.15s; }
	.chip-ph:nth-child(3) { animation-delay: 0.3s;  }
	.chip-ph:nth-child(4) { animation-delay: 0.45s; }

	/* ── Pulse animation ────────────────────── */
	@keyframes pulse {
		0%, 100% { opacity: 1; }
		50%       { opacity: 0.5; }
	}

	/* ── Responsive ─────────────────────────── */
	@media (max-width: 600px) {
		.view { padding: 8px 16px 40px; }
	}
</style>
