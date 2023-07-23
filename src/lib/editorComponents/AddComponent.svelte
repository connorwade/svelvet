<script lang="ts">
	import Title from '../components/title/Title.svelte';
	import Button from '../components/button/Button.svelte';
	let modalOpen = false;
	import { pageStore } from '../../routes/editor/store';
	import TitleDialog from '../components/title/TitleDialog.svelte';

	function openComponentModal() {
		modalOpen = !modalOpen;
	}

	function addComponent(e: MouseEvent) {
		let type = (e.target as HTMLElement).dataset.component;
		let newModel;
		switch (type) {
			case 'title':
				newModel = {
					key: crypto.randomUUID(),
					type: 'title',
					el: Title,
					dialog: TitleDialog,
					children: [],
					props: {
						content: 'Title Component',
						tag: 'h2'
					}
				};
				var l = $pageStore.content.length;
				$pageStore.content[l] = newModel;
				break;
			case 'button':
				newModel = {
					key: crypto.randomUUID(),
					type: 'button',
					el: Button,
					dialog: TitleDialog,
					children: [],
					props: {
						content: 'Button Component'
					}
				};
				var l = $pageStore.content.length;
				$pageStore.content[l] = newModel;
				break;
			default:
				console.error('Not handled');
		}
		openComponentModal();
	}
</script>

<h2>Add a component</h2>
<button on:click={openComponentModal}>Add component</button>

{#if modalOpen}
	<section class="modal">
		<div class="modal__header">
			<h4>Add a component</h4>
			<button on:click={() => (modalOpen = !modalOpen)}>Close X</button>
		</div>
		<ul class="modal__component-list">
			<li class="modal__component-list-item">
				<button data-component="title" on:click={addComponent}>Title</button>
				<button data-component="button" on:click={addComponent}>Button</button>
			</li>
		</ul>
	</section>
{/if}

<style>
	.modal {
		width: 50vw;
		z-index: 1;
		margin: 0 auto;
		border: 1px solid black;
		border-radius: 8px;
	}

	.modal__header {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid black;
	}

	.modal__component-list {
		list-style: none;
		padding: 16px;
		margin: 0;
	}

	.modal__component-list-item button {
		background-color: #fff;
		border: none;
		width: 100%;
	}

	.modal__component-list-item button:hover {
		background-color: blue;
		color: #fff;
		cursor: pointer;
	}
</style>
