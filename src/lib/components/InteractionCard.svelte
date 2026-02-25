<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		icon,
		scenario,
		children
	}: {
		icon: string;
		scenario: string;
		children?: Snippet;
	} = $props();
</script>

<div class="card">
	<div class="icon-wrap">
		<span class="icon">{icon}</span>
	</div>
	<p class="scenario">{scenario}</p>
	{#if children}
		<div class="card-slot">
			{@render children()}
		</div>
	{/if}
</div>

<style>
	.card {
		background: var(--bg-card);
		border-radius: var(--radius-card);
		padding: 28px 24px 24px;
		box-shadow: 0 2px 16px rgba(45, 36, 34, 0.08);
		border: 1.5px solid var(--border);
	}

	.icon-wrap {
		text-align: center;
		margin-bottom: 16px;
	}

	.icon {
		font-size: 3rem;
		display: block;
		filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
	}

	.scenario {
		font-size: 1.05rem;
		font-weight: 700;
		color: var(--text);
		line-height: 1.55;
		text-align: center;
		margin: 0;
	}

	.card-slot {
		margin-top: 20px;
	}
</style>
