<script lang="ts">
	import { enhance } from "$app/forms";

	export let form;
	const baseClasses = "rounded-lg bg-dark2 p-4 outline-none resize-none";
	const errorClasses = "border-[1px] border-red";
	$: getClasses = (fieldName: string) =>
		`${baseClasses} ${form?.errors?.[fieldName] && errorClasses}`;
	$: errors = form?.errors;
</script>

<div class="container flex max-w-5xl flex-col items-center gap-16">
	<div class="flex flex-col gap-4">
		<span
			class="glow text-sm font-semibold tracking-wide text-blue sm:text-sm"
		>
			Reach out to us
		</span>
		<h1 class="text-4xl font-bold">Contact</h1>
		<p class="mt-2 leading-loose tracking-wide text-gray">
			Use the form below to send us a message. <br />
			Nah, just kidding, it won't actually send anything, but it implements
			some basic validation nonetheless.
		</p>
	</div>
	<form
		class="flex w-full max-w-3xl flex-col gap-8"
		method="POST"
		novalidate
		use:enhance={({ formData }) =>
			async ({ result, update }) => {
				const hasErrors = !!result?.data?.errors;
				await update({ reset: !hasErrors });
				if (!hasErrors) {
					alert(
						`Message sent successfully!
						To: ${formData.get("email")}
						Body: ${formData.get("message")}`,
					);
				}
			}}
	>
		<label for="email" class="flex flex-col gap-2">
			<span class="font-semibold">Email</span>
			<input class={getClasses("email")} name="email" type="email" />
			{#if errors?.email}
				<p class="text-xs font-medium text-red">{errors.email}</p>
			{/if}
		</label>
		<label class="flex flex-col gap-2">
			<span class="font-semibold">Message</span>
			<textarea class={getClasses("message")} name="message" rows={8} />
			{#if errors?.message}
				<p class="text-xs font-medium text-red">
					{errors.message}
				</p>
			{/if}
		</label>
		<button
			class="place-self-end rounded-lg bg-white px-4 py-3 font-semibold text-dark"
		>
			Submit
		</button>
	</form>
</div>
