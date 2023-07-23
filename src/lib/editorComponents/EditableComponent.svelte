<script lang="ts">
	import ComponentDialog from './ComponentDialog.svelte';
	import { pageStore, type ComponentType } from '../../routes/editor/store';
	export let component: ComponentType;

	let dialogOpen = false;

	function handleDialogOpen() {
		dialogOpen = !dialogOpen;
	}

	function handleRemove() {
		$pageStore.content = $pageStore.content.filter((storeItem) => storeItem.key !== component.key);
	}
</script>

<div class="svelvete-component">
	<slot />
	<button on:click={handleDialogOpen}>dialog</button>
	<button on:click={handleRemove}>Remove</button>
</div>

<ComponentDialog {component} {dialogOpen} />

<style>
	.svelvete-component {
		border: 1px solid black;
	}

	.svelvete-component:hover {
		border: 3px solid blue;
		cursor: pointer;
	}
</style>
