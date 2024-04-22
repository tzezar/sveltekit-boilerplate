<script lang="ts">
	import type { paths } from '$lib/api';
	import { createQuery } from '@tanstack/svelte-query';
	import createClient from 'openapi-fetch';

	const client = createClient<paths>({ baseUrl: 'http://192.168.0.206:3000/' });

	async function getProducts() {
		return await client.GET('/documents/', {
			params: {
				query: {
					limit: 10,
					offset: 0
				}
			}
		});
	}

	const query = createQuery({
		queryKey: ['products'],
		queryFn: () => getProducts()
	});
	$: results = $query.data?.data || [];
</script>

<h1 class='text-xl font-bold'>Internal</h1>
{#each results as item}
	<p>
		Document {item.id}
	</p>
{/each}

