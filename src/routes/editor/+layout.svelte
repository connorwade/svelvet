<script lang="ts">
	import { pageStore } from './store';

	let publishedView = false;

	function viewAsPublished() {
		publishedView = !publishedView;
	}

	let header: HTMLElement;
	function trackMouse(e: MouseEvent) {
		console.log(e.clientY);
		if (e.clientY <= 20) {
			header.style.position = 'relative';
		} else {
			header.style.position = 'absolute';
		}
	}

	async function publish() {
		// console.log($pageStore);
		// console.log(JSON.stringify($pageStore));
		const response = await fetch('/editor', {
			method: 'POST',
			body: JSON.stringify($pageStore),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		console.log(response);
	}
</script>

<svelte:window on:mousemove={publishedView ? trackMouse : null} />

<header bind:this={header} class={publishedView ? 'hide' : ''}>
	<h3>Svelvet Editor</h3>
	<button on:click={viewAsPublished}>{publishedView ? 'Editing Mode' : 'View as Published'}</button>

	<button
		data-key="publisher-data"
		value={JSON.stringify($pageStore)}
		on:click|preventDefault={publish}>Publish Page</button
	>
</header>

<slot />

<style>
	header {
		display: flex;
	}

	header * {
		margin: 0 16px;
	}

	.hide {
		position: absolute;
		bottom: 100%;
	}
</style>
