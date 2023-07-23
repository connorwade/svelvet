<script lang="ts">
	import type Title from './Title.svelte';
	import type { ComponentType } from '../../../routes/editor/store';
	import { pageStore } from '../../../routes/editor/store';
	export let component: ComponentType;
</script>

<div class="dialog">
	<label>Content<input type="text" bind:value={component.props.content} /></label>
	<label
		>Tag
		<select name="tag" id="tag" bind:value={component.props.tag}>
			<option value={'h1'}>h1</option>
			<option value={'h2'}>h2</option>
			<option value={'h3'}>h3</option>
			<option value={'h4'}>h4</option>
			<option value={'h5'}>h5</option>
			<option value={'h6'}>h6</option>
		</select>
	</label>
</div>
