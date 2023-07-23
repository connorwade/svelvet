<script lang="ts">
	import EditableComponent from '../../lib/editorComponents/EditableComponent.svelte';
	import AddComponent from '../../lib/editorComponents/AddComponent.svelte';
	import { pageStore } from './store';
</script>

<main>
	{#each $pageStore.content as component}
		<EditableComponent {component}>
			<svelte:component this={component.el} {...component.props} />
		</EditableComponent>
	{/each}

	<AddComponent />
</main>
