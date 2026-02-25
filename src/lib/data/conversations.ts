// ─────────────────────────────────────────────
// Conversation catalog
// Shown on the /conversation selection hub.
// Each id must map to an entry in src/lib/api/conversation.ts
// ─────────────────────────────────────────────

export interface ConversationItem {
	id: string;
	title: string;
	description: string;
	tag: string;
}

export const conversations: ConversationItem[] = [
	{
		id: 'self-talk',
		title: 'Self-Talk',
		description: 'Placeholder description. How do you speak to yourself when no one is listening?',
		tag: 'Inner World · 3 steps'
	},
	{
		id: 'inner-critic',
		title: 'Inner Critic',
		description: 'Placeholder description. Meet the voice that judges, and learn to respond.',
		tag: 'Inner World · 2 steps'
	},
	{
		id: 'boundaries',
		title: 'Setting Boundaries',
		description: 'Placeholder description. Practicing the language of limit-setting with care.',
		tag: 'Relationships · 4 steps'
	},
	{
		id: 'morning-check',
		title: 'Morning Check-In',
		description: 'Placeholder description. A short ritual for naming what you carry into the day.',
		tag: 'Daily Practice · 2 steps'
	}
];
