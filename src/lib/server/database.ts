import type { PageModel } from '../../routes/editor/store';

const database = new Map<`${string}-${string}-${string}-${string}-${string}`, PageModel>(); // Should match page models

export function createPage(pageModel: PageModel) {
	database.set(pageModel.id, {
		...pageModel
	});
}

export function getPage(id: `${string}-${string}-${string}-${string}-${string}`) {
	if (!database.has(id)) {
		return;
	}

	return database.get(id);
}

export function getPages() {
	return Array.from(database.values());
}
