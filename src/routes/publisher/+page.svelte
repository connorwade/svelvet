<script>
	export let data;
</script>

<h1>Publisher</h1>

<ul>
	{#each data.pages as { slug }, i}
		<li><a href="/publisher/{slug}">Page {i}</a></li>
	{/each}
</ul>
