import * as database from '$lib/server/database';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const pageModel = await request.json();
    
	database.createPage(pageModel);

	return json(pageModel.id, { status: 201 });
}
