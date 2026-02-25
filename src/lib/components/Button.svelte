<script lang="ts">
	import type { Snippet } from 'svelte';

	type Variant = 'primary' | 'secondary' | 'danger' | 'ghost';

	let {
		variant = 'primary',
		disabled = false,
		href,
		onclick,
		children
	}: {
		variant?: Variant;
		disabled?: boolean;
		href?: string;
		onclick?: () => void;
		children: Snippet;
	} = $props();
</script>

{#if href}
	<a {href} class="btn btn--{variant}">
		{@render children()}
	</a>
{:else}
	<button class="btn btn--{variant}" {disabled} {onclick}>
		{@render children()}
	</button>
{/if}

<style>
	.btn {
		border: none;
		border-radius: var(--radius-btn);
		padding: 14px 24px;
		font-size: 1rem;
		font-weight: 800;
		cursor: pointer;
		transition:
			transform 0.1s ease,
			box-shadow 0.1s ease,
			filter 0.1s ease;
		letter-spacing: 0.5px;
		text-transform: uppercase;
		width: 100%;
		font-family: inherit;
	}

	.btn:active:not(:disabled) {
		transform: translateY(3px);
	}

	a.btn {
		display: inline-block;
		width: auto;
	}

	.btn:disabled {
		opacity: 0.45;
		cursor: not-allowed;
	}

	.btn--primary {
		background: var(--accent);
		color: #fff;
		box-shadow: 0 4px 0 var(--accent-dark);
	}

	.btn--secondary {
		background: var(--bg-card);
		color: var(--info);
		border: 2px solid var(--border-ph);
		box-shadow: 0 4px 0 var(--border-ph);
	}

	.btn--danger {
		background: var(--incorrect);
		color: #fff;
		box-shadow: 0 4px 0 var(--incorrect-dark);
	}

	.btn--ghost {
		background: transparent;
		color: var(--text-secondary);
		border: 2px solid var(--border-ph);
		box-shadow: none;
	}
</style>
