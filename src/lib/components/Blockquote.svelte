<script lang="ts">
	export let content: string;
	export let id: number;
</script>

<blockquote class="flex gap-4" id="blockquote-{id}">
	<div class="glow min-h-full w-[3px] rounded-full bg-blue" />
	<span class="p-4 text-lg font-medium text-[#fff]">
		{content}
	</span>
</blockquote>

<style>
	.glow {
		box-shadow: 0px 0px 29px 7px rgba(14, 163, 231, 0.12);
	}
</style>
