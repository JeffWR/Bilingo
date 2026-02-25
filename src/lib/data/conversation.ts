// ─────────────────────────────────────────────
// Conversation scaffold data
// Replace placeholder text with real content here.
// ─────────────────────────────────────────────

export interface Choice {
	id: string;
	label: string;
}

export interface Step {
	id: number;
	icon: string;
	question: string;
	description: string;
	choices: Choice[];
}

export const steps: Step[] = [
	{
		id: 1,
		icon: '□',
		question: 'Question placeholder',
		description: 'Description placeholder. This is where the scene or emotional context will be set.',
		choices: [
			{ id: 'a', label: 'Option A' },
			{ id: 'b', label: 'Option B' },
			{ id: 'c', label: 'Option C' },
			{ id: 'd', label: 'Option D' }
		]
	},
	{
		id: 2,
		icon: '□',
		question: 'Question placeholder',
		description: 'Description placeholder. This is where the scene or emotional context will be set.',
		choices: [
			{ id: 'a', label: 'Option A' },
			{ id: 'b', label: 'Option B' },
			{ id: 'c', label: 'Option C' },
			{ id: 'd', label: 'Option D' }
		]
	},
	{
		id: 3,
		icon: '□',
		question: 'Question placeholder',
		description: 'Description placeholder. This is where the scene or emotional context will be set.',
		choices: [
			{ id: 'a', label: 'Option A' },
			{ id: 'b', label: 'Option B' },
			{ id: 'c', label: 'Option C' },
			{ id: 'd', label: 'Option D' }
		]
	}
];
