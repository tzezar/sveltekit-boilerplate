<script lang="ts">
	import NavigationItem from './NavigationItem.svelte';
	import type { Items } from './types';
	import MaterialSymbolsLightApkDocument from '~icons/material-symbols-light/apk-document';
	import StreamlineMoneyCashierTagCodesTagsTagProductLabel from '~icons/streamline/money-cashier-tag-codes-tags-tag-product-label'
	import { urls } from '$lib/navigation';
	let items: Items = [
		{
			title: 'Products',
			url: urls.internal.products,
			icon: StreamlineMoneyCashierTagCodesTagsTagProductLabel
		},
		{
			title: 'Orders',
			url: urls.internal.orders,
			icon: MaterialSymbolsLightApkDocument
		}
	];
</script>

<ul class="">
	{#each items as item}
		<NavigationItem {item} level={1} />
	{/each}
</ul>
