<script lang="ts">
	import theme from "$lib/codetheme";
	import Highlight from "svelte-highlight";
	import typescript from "svelte-highlight/languages/typescript";

	export let content: string;
	export let id: number;
</script>

<svelte:head>
	{@html theme}
</svelte:head>

<div id="pre-{id}" class="flex flex-col">
	<div class="bar flex h-8 items-center rounded-t-lg p-4">
		<div class="flex gap-2">
			<div class="red h-3 w-3 rounded-full" />
			<div class="yellow h-3 w-3 rounded-full" />
			<div class="green h-3 w-3 rounded-full" />
		</div>
	</div>
	<Highlight language={typescript} code={content} />
</div>

<style>
	.bar {
		box-shadow: 0px 4px 3px 0px rgba(255, 255, 255, 0.03) inset;
		@apply bg-dark2;
	}

	:global(code) {
		box-shadow:
			0px -3px 6px -1px #011118 inset,
			0px 5px 6px 0px rgba(0, 0, 0, 0.36) inset;
		@apply text-sm leading-loose bg-dark2 rounded-b-md;
	}

	.red {
		background-color: #fc5753;
		box-shadow:
			0px -4px 4px 0px rgba(0, 0, 0, 0.3) inset,
			0px 4px 4px 0px rgba(255, 255, 255, 0.1) inset;
		filter: drop-shadow(0px 0px 12px rgba(252, 87, 83, 0.45));
	}

	.yellow {
		background-color: #fdbc40;
		box-shadow:
			0px -4px 4px 0px rgba(0, 0, 0, 0.3) inset,
			0px 4px 4px 0px rgba(255, 255, 255, 0.1) inset;
		filter: drop-shadow(0px 0px 12px rgba(253, 188, 64, 0.45));
	}

	.green {
		background-color: #36c84b;
		box-shadow:
			0px -4px 4px 0px rgba(0, 0, 0, 0.3) inset,
			0px 4px 4px 0px rgba(255, 255, 255, 0.1) inset;
		filter: drop-shadow(0px 0px 12px rgba(54, 200, 75, 0.45));
	}
</style>
