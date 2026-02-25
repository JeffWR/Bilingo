<script lang="ts">
	type ChipState = 'default' | 'selected' | 'correct' | 'incorrect';

	let {
		text,
		state = 'default',
		disabled = false,
		onclick
	}: {
		text: string;
		state?: ChipState;
		disabled?: boolean;
		onclick?: () => void;
	} = $props();
</script>

<button class="chip chip--{state}" {disabled} {onclick}>
	{text}
</button>

<style>
	.chip {
		display: block;
		width: 100%;
		padding: 16px 20px;
		border-radius: var(--radius-chip);
		font-size: 0.97rem;
		font-weight: 700;
		font-family: inherit;
		text-align: left;
		cursor: pointer;
		transition:
			transform 0.1s ease,
			background 0.15s ease,
			border-color 0.15s ease;
		border: 2px solid var(--border-ph);
		background: var(--bg-card);
		color: var(--text);
		line-height: 1.4;
	}

	.chip:hover:not(:disabled) {
		border-color: var(--info);
		background: var(--info-light);
		transform: translateY(-1px);
	}

	.chip:active:not(:disabled) {
		transform: scale(0.98) translateY(0);
	}

	.chip:disabled {
		cursor: default;
	}

	.chip--selected {
		border-color: var(--info);
		background: var(--info-bg);
		color: var(--info-text);
		box-shadow: 0 0 0 1px var(--info);
	}

	.chip--correct {
		border-color: var(--correct);
		background: var(--correct-bg);
		color: var(--correct-text);
		box-shadow: 0 0 0 1px var(--correct);
	}

	.chip--incorrect {
		border-color: var(--incorrect);
		background: var(--incorrect-bg);
		color: var(--incorrect-text);
		box-shadow: 0 0 0 1px var(--incorrect);
	}
</style>
