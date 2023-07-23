import * as database from '$lib/server/database';

export function load() {
	let pages = database.getPages();
	pages.forEach((page) => console.log(page.content));
	return {
		pages: pages.map((page) => ({
			slug: page.id,
			content: page.content
		}))
	};
}
