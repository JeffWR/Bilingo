// ─────────────────────────────────────────────
// Mock API for conversation format + data
//
// Replace the mock registry entries with real fetch() calls
// when a backend or LLM API is connected. The call signatures
// (fetchFormat / fetchData) stay the same — only the internals change.
// ─────────────────────────────────────────────

import type { FormatSchema, ConversationData } from '$lib/types/schema';

function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

// ── Format registry ───────────────────────────
// Maps conversation id → layout schema
const formatRegistry: Record<string, FormatSchema> = {
	'self-talk': {
		layout: 'step-flow',
		steps: [
			{ components: ['interaction-card', 'choice-chips'], choiceCount: 4 },
			{ components: ['interaction-card', 'choice-chips'], choiceCount: 4 },
			{ components: ['interaction-card', 'choice-chips'], choiceCount: 4 }
		]
	},
	'inner-critic': {
		layout: 'step-flow',
		steps: [
			{ components: ['interaction-card', 'choice-chips'], choiceCount: 4 },
			{ components: ['interaction-card', 'choice-chips'], choiceCount: 4 }
		]
	},
	boundaries: {
		layout: 'step-flow',
		steps: [
			{ components: ['interaction-card', 'choice-chips'], choiceCount: 4 },
			{ components: ['interaction-card', 'choice-chips'], choiceCount: 4 },
			{ components: ['interaction-card', 'choice-chips'], choiceCount: 4 },
			{ components: ['interaction-card', 'choice-chips'], choiceCount: 4 }
		]
	},
	'morning-check': {
		layout: 'step-flow',
		steps: [
			{ components: ['interaction-card', 'choice-chips'], choiceCount: 4 },
			{ components: ['interaction-card', 'choice-chips'], choiceCount: 4 }
		]
	}
};

// ── Data registry ─────────────────────────────
// Maps conversation id → content data
const dataRegistry: Record<string, ConversationData> = {
	'self-talk': {
		title: 'Self-Talk',
		steps: [
			{
				icon: '🪞',
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
				icon: '💭',
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
				icon: '✨',
				question: 'Question placeholder',
				description: 'Description placeholder. This is where the scene or emotional context will be set.',
				choices: [
					{ id: 'a', label: 'Option A' },
					{ id: 'b', label: 'Option B' },
					{ id: 'c', label: 'Option C' },
					{ id: 'd', label: 'Option D' }
				]
			}
		]
	},
	'inner-critic': {
		title: 'Inner Critic',
		steps: [
			{
				icon: '🌧',
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
				icon: '🌱',
				question: 'Question placeholder',
				description: 'Description placeholder. This is where the scene or emotional context will be set.',
				choices: [
					{ id: 'a', label: 'Option A' },
					{ id: 'b', label: 'Option B' },
					{ id: 'c', label: 'Option C' },
					{ id: 'd', label: 'Option D' }
				]
			}
		]
	},
	boundaries: {
		title: 'Setting Boundaries',
		steps: [
			{
				icon: '🚧',
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
				icon: '🤝',
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
				icon: '💬',
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
				icon: '🌟',
				question: 'Question placeholder',
				description: 'Description placeholder. This is where the scene or emotional context will be set.',
				choices: [
					{ id: 'a', label: 'Option A' },
					{ id: 'b', label: 'Option B' },
					{ id: 'c', label: 'Option C' },
					{ id: 'd', label: 'Option D' }
				]
			}
		]
	},
	'morning-check': {
		title: 'Morning Check-In',
		steps: [
			{
				icon: '☀️',
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
				icon: '🫁',
				question: 'Question placeholder',
				description: 'Description placeholder. This is where the scene or emotional context will be set.',
				choices: [
					{ id: 'a', label: 'Option A' },
					{ id: 'b', label: 'Option B' },
					{ id: 'c', label: 'Option C' },
					{ id: 'd', label: 'Option D' }
				]
			}
		]
	}
};

// ── Public API ────────────────────────────────

export async function fetchFormat(id: string): Promise<FormatSchema> {
	await delay(400 + Math.random() * 200);
	const schema = formatRegistry[id];
	if (!schema) throw new Error(`No format found for id: ${id}`);
	return schema;
}

export async function fetchData(id: string): Promise<ConversationData> {
	await delay(400 + Math.random() * 200);
	const data = dataRegistry[id];
	if (!data) throw new Error(`No data found for id: ${id}`);
	return data;
}
