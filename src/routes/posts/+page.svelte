<script lang="ts">
	export let data;
</script>

<div class="container flex flex-col gap-8">
	<h1 class="text-4xl font-bold">Posts</h1>
	<div class="card-grid">
		{#each data.posts as { mainImage, title, lead, caption }, idx}
			<a class="flex flex-col gap-3" href="posts/{idx + 1}">
				<img
					src={mainImage}
					class="h-64 w-full rounded-lg object-cover pb-2"
					alt="Image for {title}"
				/>
				<span class="glow text-xs font-medium tracking-wide text-blue">
					{caption}
				</span>
				<h1 class="text-xl font-bold">{title}</h1>
				<p class="text-sm leading-loose tracking-wide text-gray">
					{lead}
				</p>
			</a>
		{/each}
	</div>
</div>

<style>
	.card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
		gap: 2rem;
	}
</style>
