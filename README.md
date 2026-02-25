# 🗣️ Small Children Learning to Speak (Working Title)

> *"If we cannot speak negatively to our younger selves, why do we continue to direct negative language toward ourselves now?"*

This is an interactive web-art project built with Svelte. It adopts the familiar, gamified UI of language-learning platforms (like Duolingo) but flips the objective. Instead of teaching foreign vocabulary, we are "translating" emotional expressions across cultural contexts—specifically examining the difficulty of expressing the "I," love, and vulnerability in Asian/Confucian upbringings compared to Western contexts.

## 🎭 The Concept
We are learning to speak our emotions like children. This platform mimics the linguistic and cultural environments of our upbringing. It features intentional "negative feedback" loops for direct emotional expression to prompt users to reflect on how criticism shapes our language, our self-expression, and the construction of our identity. 

## 🛠️ Tech Stack
* **Framework:** [SvelteKit](https://kit.svelte.dev/) - Chosen for its component-based architecture and highly interactive nature.
* **Styling:** CSS/SCSS (Custom "Juicy" UI design)
* **Animation:** Svelte Motion / Vanilla CSS Transitions

## 🧩 Project Structure (The "Duolingo" Deconstruction)
Our architecture relies on highly reusable, interactive components:
* **The Stage (`<Layout />`):** The persistent wrapper and navigation.
* **The Unit (`<InteractionCard />`):** The focused, center-screen card where the emotional translation task happens.
* **The Feedback (`<ReactionAvatar />`):** The visual mascot that reacts (sometimes negatively) to the user's vulnerability.
* **The Tools:** Reusable UI blocks like `<Button />`, `<ChoiceChip />`, and `<WorldSwitch />`.

## 🚀 Getting Started (For the Team)

If you are pulling this code to test it locally, follow these steps:

1. **Clone the repository:**
   `git clone https://github.com/your-username/your-repo-name.git`
2. **Navigate into the directory:**
   `cd your-repo-name`
3. **Install the dependencies:**
   `npm install`
4. **Run the local development server:**
   `npm run dev`
5. Open your browser to `http://localhost:5173` to view the project.

## 📖 Living Documentation
For detailed design specs, component breakdowns, and instructions on how to contribute ideas, please refer to our **[Link to your shared SRS/Google Doc here]**.
