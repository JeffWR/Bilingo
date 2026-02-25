<script lang="ts">
	import { page } from '$app/stores';
	import '$lib/styles/theme.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Small Children Learning to Speak</title>
</svelte:head>

<div class="app">
	<header class="header">
		<!-- Logo -->
		<a href="/" class="logo">
			<svg class="logo-mark" viewBox="0 0 34 35" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<path d="M5,1 H18 Q22,1 22,5 V14 Q22,18 18,18 H11 L6,24 L10,18 H5 Q1,18 1,14 V5 Q1,1 5,1 Z" fill="var(--cream)"/>
				<path d="M14,10 H29 Q33,10 33,14 V23 Q33,27 29,27 H24 L28,33 L22,27 H14 Q10,27 10,23 V14 Q10,10 14,10 Z" fill="var(--bg-nav)" stroke="var(--cream)" stroke-width="1.5" stroke-opacity="0.5"/>
			</svg>
			<span class="logo-text">
				<span class="logo-line1">Small Children</span>
				<span class="logo-line2">Learning to Speak</span>
			</span>
		</a>

		<!-- Nav -->
		<nav class="nav">
			<a href="/" class="nav-link" class:active={$page.url.pathname === '/'}>
				<span class="nav-label">Home</span>
				<span class="nav-dot"></span>
			</a>
			<a href="/conversation" class="nav-link" class:active={$page.url.pathname.startsWith('/conversation')}>
				<span class="nav-label">Conversation</span>
				<span class="nav-dot"></span>
			</a>
		</nav>

		<!-- Profile -->
		<div class="right">
			<div class="avatar" aria-label="Profile">
				<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="16" cy="12" r="5" fill="var(--cream)" opacity="0.7" />
					<path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="var(--cream)" stroke-width="2" stroke-linecap="round" opacity="0.7" />
				</svg>
			</div>
		</div>
	</header>

	<main class="main">
		{@render children()}
	</main>
</div>

<style>
	:global(*) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	:global(html, body) {
		font-family: var(--font);
		background: var(--bg-page);
		color: var(--text);
		min-height: 100vh;
		overscroll-behavior: none;
		scrollbar-width: none;
	}

	:global(::-webkit-scrollbar) {
		display: none;
	}

	:global(a) {
		text-decoration: none;
		color: inherit;
	}

	.app {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	/* ── Header ─────────────────────────────── */
	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 32px;
		height: var(--nav-height);
		background: var(--bg-nav);
		border-bottom: 1px solid var(--cream-07);
	}

	/* ── Logo ────────────────────────────────── */
	.logo {
		display: flex;
		align-items: center;
		gap: 10px;
		flex: 1;
	}

	.logo-mark {
		width: 30px;
		height: 30px;
		flex-shrink: 0;
		transition: transform 0.2s ease;
	}

	.logo:hover .logo-mark {
		transform: rotate(-6deg) scale(1.08);
	}

	.logo-text {
		display: flex;
		flex-direction: column;
		gap: 1px;
	}

	.logo-line1 {
		font-size: 0.82rem;
		font-weight: 900;
		color: var(--cream);
		letter-spacing: -0.2px;
		line-height: 1;
	}

	.logo-line2 {
		font-size: 0.72rem;
		font-weight: 700;
		color: var(--cream-45);
		letter-spacing: -0.1px;
		line-height: 1;
	}

	/* ── Nav ─────────────────────────────────── */
	.nav {
		display: flex;
		align-items: center;
		gap: 2px;
	}

	.nav-link {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4px;
		padding: 8px 20px;
		border-radius: 10px;
		transition: background 0.15s ease;
	}

	.nav-link:hover {
		background: var(--cream-06);
	}

	.nav-label {
		font-size: 0.88rem;
		font-weight: 800;
		letter-spacing: 0.6px;
		text-transform: uppercase;
		color: var(--cream-40);
		transition: color 0.15s ease;
	}

	.nav-dot {
		display: block;
		width: 4px;
		height: 4px;
		border-radius: var(--radius-pill);
		background: var(--cream);
		opacity: 0;
		transform: scale(0);
		transition:
			opacity 0.2s ease,
			transform 0.2s ease;
	}

	.nav-link:hover .nav-label {
		color: var(--cream-70);
	}

	.nav-link.active .nav-label {
		color: var(--cream);
	}

	.nav-link.active .nav-dot {
		opacity: 1;
		transform: scale(1);
	}

	/* ── Right ───────────────────────────────── */
	.right {
		display: flex;
		align-items: center;
		flex: 1;
		justify-content: flex-end;
	}

	.avatar {
		width: 34px;
		height: 34px;
		border-radius: 50%;
		background: var(--cream-08);
		border: 1.5px solid var(--cream-20);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition:
			background 0.15s ease,
			border-color 0.15s ease;
		padding: 5px;
	}

	.avatar:hover {
		background: var(--cream-14);
		border-color: var(--cream-40);
	}

	/* ── Main ────────────────────────────────── */
	.main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding-top: var(--nav-height);
	}

	/* ── Responsive ──────────────────────────── */
	@media (max-width: 600px) {
		.header {
			padding: 0 16px;
		}

		.logo-line1,
		.logo-line2 {
			display: none;
		}
	}
</style>
