<script>
	import Navigation from './_components/Navigation.svelte';
	import SidebarMobile from './_components/SidebarMobile.svelte';
</script>

<div class="antialiased dark:bg-gray-900">
	<nav
		class="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white px-4 py-2.5 dark:border-gray-700 dark:bg-gray-800"
	>
		<div class="flex flex-wrap items-center justify-between">
			<div class="flex w-full items-center gap-2">
				<a href="/internal" class="mr-4 flex items-center justify-between">
					<span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
						LOGO
					</span>
				</a>
				<div class="ml-auto">
					<SidebarMobile />
				</div>
			</div>
		</div>
	</nav>
	<aside
		class="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full border-r border-gray-200 bg-white pt-14 transition-transform dark:border-gray-700 dark:bg-gray-800 md:translate-x-0"
		aria-label="Sidenav"
	>
		<div class="h-full overflow-y-auto bg-white px-3 py-5 dark:bg-gray-800">
			<Navigation />
		</div>
		<div
			class="absolute bottom-0 left-0 z-20 w-full justify-center space-x-4 bg-white p-4 dark:bg-gray-800 lg:flex"
		>
			bottom
		</div>
	</aside>
	<main class="h-auto p-4 pt-20 md:ml-64">
		<slot />
	</main>
</div>
