<script lang="ts">
	import MaterialSymbolsLightExpandMore from '~icons/material-symbols-light/expand-more';
	import MaterialSymbolsLightExpandLess from '~icons/material-symbols-light/expand-less';
	import type { Item } from './types';
	import { cn } from '$lib/utils';
	
	export let item: Item;
	let expanded = false;

	const toggleExpanded = () => {
		console.log(expanded);
		expanded = !expanded;
	};

	export let level: number;
</script>

<li>
	{#if item.subItems}
		<button
			type="button"
			class="group flex w-full items-center rounded-lg p-2 text-base font-medium text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
			on:click={toggleExpanded}
		>
			{#if item?.icon}
				<svelte:component
					this={item?.icon}
					class="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
				/>
			{/if}

            <span class={cn(level == 1 && 'ml-3', level == 2 && 'ml-9', level == 3 && 'ml-16')}>
				{item?.title || ''}
			</span>

			<div class="ml-auto">
				{#if expanded}
					<MaterialSymbolsLightExpandLess class="h-6 w-6" />
				{:else}
					<MaterialSymbolsLightExpandMore class="h-6 w-6" />
				{/if}
			</div>
		</button>
		{#if expanded}
			<ul class="space-y-2 py-2">
				{#each item.subItems as subItem}
					<svelte:self item={subItem} level={level + 1} />
				{/each}
			</ul>
		{/if}
	{:else}
		<li>
			<a
				href={item.url}
				class="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
			>
				{#if item?.icon}
					<svelte:component
						this={item?.icon}
						class="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
					/>
				{/if}

				<span class={cn(level == 1 && 'ml-3', level == 2 && 'ml-9', level == 3 && 'ml-16')}>
					{item.title}
				</span>
			</a>
		</li>
	{/if}
</li>
