<script lang="ts">
	import SvelteMarkdown from "svelte-markdown";
	import { onMount, type ComponentType } from "svelte";
	import Blockquote from "$lib/components/Blockquote.svelte";
	import Code from "$lib/components/Code.svelte";

	const populateComponent = (component: ComponentType, tag: string) =>
		document.querySelectorAll(tag).forEach((el, id) => {
			new component({
				props: { content: el.children[0].innerText, id },
				target: el.parentElement!,
			});
			const target = document.getElementById(`${tag}-${id}`)!;
			el.parentElement?.replaceChild(target, el);
		});

	onMount(() => {
		populateComponent(Blockquote, "blockquote");
		populateComponent(Code, "pre");
	});

	export let data;
	$: ({ caption, title, lead, body, mainImage } = data.post);
</script>

<svelte:head>
	<title>{title} - Simpleblog</title>
</svelte:head>

<div class="container relative">
	<div class="mb-24 flex flex-col gap-6">
		<div class="flex flex-col gap-4">
			<span
				class="glow text-xs font-semibold tracking-wide text-blue sm:text-sm"
			>
				{caption}
			</span>
			<h1
				class="text-3xl font-bold leading-tight tracking-tight sm:text-5xl"
			>
				{title}
			</h1>
		</div>
		<p>{lead}</p>
		<img src={mainImage} class="max-h-[700px] w-full object-cover" alt="" />
	</div>
	<div class="mx-auto flex max-w-[700px] flex-col gap-16 pb-32">
		<SvelteMarkdown source={body} />
	</div>
</div>

<style>
	:global(p > code) {
		@apply text-white px-1;
	}

	:global(p + div) {
		@apply mt-[-2rem];
	}

	:global(h2) {
		@apply text-[1.25rem] font-bold mb-[-2.5rem] mt-24 tracking-wide;
	}

	:global(h3) {
		@apply font-bold mb-[-2.5rem] tracking-wide;
	}

	:global(p) {
		@apply tracking-wide text-gray leading-loose;
	}

	:global(ul) {
		@apply list-disc text-gray pl-8;
	}
</style>
