<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<section class="hero">
	<div class="hero-inner">
		<div class="hero-badge">Web Art · Interactive · Emotional Translation</div>
		<h1 class="hero-title">Small Children<br />Learning to Speak.</h1>
		<p class="hero-subtitle">
			A language-learning platform where the language is <em>you</em>.
		</p>
		<blockquote class="hero-quote">
			"If we cannot speak negatively to our younger selves, why do we continue to direct negative
			language toward ourselves now?"
		</blockquote>
		<Button href="/conversation">Begin →</Button>
	</div>
</section>

<Footer />

<style>
	.hero {
		min-height: calc(100vh - var(--nav-height));
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(160deg, var(--bg-hero-start) 0%, var(--bg-hero-mid) 60%, var(--bg-hero-end) 100%);
		padding: 80px 24px;
		text-align: center;
	}

	.hero-inner {
		max-width: 640px;
		margin: 0 auto;
	}

	.hero-badge {
		display: inline-block;
		background: rgba(255, 255, 255, 0.12);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: var(--radius-pill);
		padding: 5px 16px;
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.8px;
		text-transform: uppercase;
		color: var(--cream);
		margin-bottom: 24px;
	}

	.hero-title {
		font-size: clamp(2.4rem, 6vw, 3.8rem);
		font-weight: 900;
		line-height: 1.1;
		letter-spacing: -1px;
		margin-bottom: 20px;
		color: var(--cream);
	}

	.hero-subtitle {
		font-size: 1.15rem;
		font-weight: 600;
		color: var(--cream-75);
		margin-bottom: 28px;
		line-height: 1.5;
	}

	.hero-subtitle em {
		color: var(--cream);
		font-style: normal;
		font-weight: 800;
	}

	.hero-quote {
		font-size: 0.95rem;
		font-style: italic;
		font-weight: 600;
		color: var(--cream-60);
		border-left: 3px solid var(--cream-30);
		padding-left: 16px;
		text-align: left;
		margin: 0 auto 36px;
		max-width: 500px;
		line-height: 1.6;
	}


</style>
