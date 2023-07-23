<script lang="ts">
	import type { ComponentType } from '../../routes/editor/store';
	import { pageStore } from '../../routes/editor/store';

	export let dialogOpen: Boolean;
	export let component: ComponentType;

	let dialog: HTMLDialogElement;
	let index = $pageStore.content.findIndex((storeItem) => storeItem.key === component.key);
	function updateProps() {
		$pageStore.content[index] = component;
		dialogOpen = false;
		dialog.close();
	}

	$: if (dialog && dialogOpen) dialog.showModal();
</script>

<dialog bind:this={dialog} on:close={() => (dialogOpen = false)}>
	<svelte:component this={component.dialog} {component} />
	<div class="dialog__bottom-bar">
		<button on:click={updateProps}>Submit</button>
	</div>
</dialog>
