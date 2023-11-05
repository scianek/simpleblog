import type { Post } from "./types";

import hooksPost from "$lib/posts/hooks.md?raw";
import toolsPost from "$lib/posts/article.md?raw";
import stateManagementPost from "$lib/posts/state.md?raw";

export const posts: Post[] = [
	{
		caption: "Navigating the World of React",
		title: "Introduction to React Hooks",
		lead: "Exploring the most commonly used React hooks, their usage and best practices to build a solid React foundation",
		body: hooksPost,
		mainImage: "/hook.png",
	},

	{
		caption: "Navigating the World of Frontend Development",
		title: "Exploring leading frontend tools",
		lead: "Choosing the right tool for building your app to make sure it suits your and your team's needs",
		body: toolsPost,
		mainImage: "/tools.png",
	},

	{
		caption: "Mastering React",
		title: "State Management in React",
		lead: "Considering the most efficient ways to manage your state to build modern and scalable apps",
		body: stateManagementPost,
		mainImage: "/react.png",
	},
];
