<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import Title from '$lib/components/title/Title.svelte';

	export let data;

	type Buildable = {
		el?: any;
		props?: Record<string, any>;
	};

	let components: Buildable[] = [];
	for (let i = 0; i < data.page.content.length; i++) {
		components[i] = {};
		components[i].props = data.page.content[i].props;
		switch (data.page.content[i].type) {
			case 'title':
				components[i].el = Title;
				break;
			case 'button':
				components[i].el = Button;
				break;
			default:
				console.error('Not handled');
		}
	}
</script>

<main>
	{#each components as component}
		<svelte:component this={component.el} {...component.props} />
	{/each}
</main>
