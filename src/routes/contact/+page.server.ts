import { z } from "zod";

const schema = z.object({
	email: z.string().email(),
	message: z.string().min(20),
});

export const actions = {
	default: async ({ request }) => {
		console.log("default");
		const data = await request.formData();
		const result = schema.safeParse({
			email: data.get("email"),
			message: data.get("message"),
		});
		const errors = result.error?.errors.map((e) => ({
			[e.path[0]]: e.message,
		}));
		return { errors: errors?.reduce((a, e) => ({ ...a, ...e }), {}) };
	},
};
