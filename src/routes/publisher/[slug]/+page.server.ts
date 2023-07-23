import * as database from '$lib/server/database';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const page = database.getPage(params.slug as `${string}-${string}-${string}-${string}-${string}`);

	console.log(page);

	if (!page) throw error(404);

	return {
		page
	};
}
