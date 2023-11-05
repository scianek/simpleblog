<script>
	import { blur } from "svelte/transition";
	import "./app.css";
	export let data;

	const navlinks = [
		{ name: "Posts", href: "/posts" },
		{ name: "Contact", href: "/contact" },
		{ name: "About", href: "/about" },
	];

	let isNavOpen = false;
	$: getNavClasses = () =>
		isNavOpen ? "left-0 opacity-100" : "left-[100%] opacity-0";
	$: isNavOpen = !data.pathname;
</script>

<svelte:head>
	<title>
		{navlinks.find((link) => link.href === data.pathname)?.name} - Simpleblog
	</title>
</svelte:head>

{#key data.pathname}
	<header class="fixed top-0 z-50 w-screen">
		<div class="container relative flex items-center justify-between py-6">
			<a
				href="/"
				class="font-bold uppercase tracking-[5px] text-white"
				data-sveltekit-noscroll
			>
				simpleblog
			</a>
			<nav
				class="{getNavClasses()} absolute top-[100%] flex h-[100vh] w-screen flex-col items-center justify-center gap-16 bg-dark text-4xl font-semibold transition-opacity sm:static sm:h-auto sm:w-auto sm:flex-row sm:text-sm sm:opacity-100"
			>
				{#each navlinks as { name, href }}
					<a {href} data-sveltekit-noscroll>
						{name}
					</a>
				{/each}
			</nav>
			<button
				class="flex w-10 cursor-pointer flex-col items-end gap-2 sm:hidden"
				on:click={() => (isNavOpen = !isNavOpen)}
			>
				<span class="{isNavOpen && 'longer-rotated'} h-[3px] w-10 rounded-md bg-white transition-all"
				></span>
				<span class="{isNavOpen && 'shorter-rotated'} h-[3px] w-6 rounded-md bg-white transition-all"></span>
			</button>
		</div>
	</header>

	<div
		in:blur={{ duration: 500, delay: 500 }}
		out:blur={{ duration: 500 }}
		class="mt-48"
	>
		<slot />
	</div>
{/key}

<style>
	header {
		background: rgba(8, 12, 23, 0.4);
		backdrop-filter: blur(20px);
	}

	.longer-rotated {
		transform: rotate(45deg);
	}
	.shorter-rotated {
		transform: rotate(-45deg) scaleX(1.6667) translateX(1px) translateY(-14px);
	}

</style>
