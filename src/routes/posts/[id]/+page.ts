import { posts } from "$lib/posts";
import { error } from "@sveltejs/kit";

export const load = ({ params }) => {
	const postId = +params.id - 1;
	if (postId >= posts.length) {
		throw error(404);
	}
	return { post: posts[postId] };
};
