// ─────────────────────────────────────────────
// Schema types for the two parallel API calls
// fetchFormat(id) → FormatSchema
// fetchData(id)   → ConversationData
// ─────────────────────────────────────────────

// Defines the UI structure of a conversation experience.
// Swap 'step-flow' for other layouts as the project grows.
export interface FormatSchema {
	layout: 'step-flow';
	steps: {
		components: ('interaction-card' | 'choice-chips')[];
		choiceCount: number;
	}[];
}

// The actual content that fills the format structure.
export interface ConversationData {
	title: string;
	steps: {
		icon: string;
		question: string;
		description: string;
		choices: { id: string; label: string }[];
	}[];
}
