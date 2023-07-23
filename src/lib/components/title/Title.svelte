<script lang="ts">
	export let tag: string = 'h1';
	export let content: string = 'Title Component';
</script>

<svelte:element this={tag}>{content}</svelte:element>
