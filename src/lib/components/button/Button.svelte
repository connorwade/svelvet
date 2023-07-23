<script lang="ts">
	export let content: string = 'Button Component';
	let tag = 'button';
</script>

<svelte:element this={tag}>{content}</svelte:element>
