<script lang="ts">
	import NavigationItem from './NavigationItem.svelte';
	import type { Items } from './types';
	import MaterialSymbolsLightApkDocument from '~icons/material-symbols-light/apk-document';

	let items: Items = [
		{
			title: 'Dokumenty',
			url: '/internal',
			icon: MaterialSymbolsLightApkDocument,
			subItems: [
				{
					title: 'Wydania',
					url: '/internal/about',
					subItems: [
						{
							title: 'Zewnętrzne',
							url: '/internal/about'
						},
						{
							title: 'Wewnętrzne',
							url: '/internal/about'
						}
					]
				},
				{
					title: 'Home',
					url: '/internal'
				},
				{
					title: 'Home',

					url: '/internal'
				}
			]
		},
		{
			title: 'Home',
			url: '/internal',
			icon: MaterialSymbolsLightApkDocument
		},
		{
			title: 'Home',
			url: '/internal',
			icon: MaterialSymbolsLightApkDocument
		}
	];
</script>

<ul class="space-y-2">
	{#each items as item}
		<NavigationItem {item} level={1} />
	{/each}
</ul>
