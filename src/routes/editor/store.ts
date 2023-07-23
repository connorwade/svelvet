import { writable } from 'svelte/store';
export type ComponentType = {
	key: `${string}-${string}-${string}-${string}-${string}`;
	type: string;
	el: any;
	dialog: any;
	props: Record<string, any>;
	children: any[];
};
export type PageModel = {
	id: `${string}-${string}-${string}-${string}-${string}`;
	content: ComponentType[];
};

let pageModel: PageModel = {
	id: crypto.randomUUID(),
	content: []
};

export let pageStore = writable(pageModel);
