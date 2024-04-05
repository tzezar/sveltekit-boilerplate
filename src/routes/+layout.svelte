<script lang="ts">
	import '../app.pcss';
	import { QueryClient, QueryClientProvider, createQuery } from '@tanstack/svelte-query';
	import { SvelteQueryDevtools } from '@tanstack/svelte-query-devtools';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from '$lib/components/ui/sonner';
	import { browser } from '$app/environment';

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});
</script>

<QueryClientProvider client={queryClient}>
	<Toaster position={'bottom-left'} visibleToasts={5} richColors closeButton />
	<ModeWatcher defaultMode="light" />
	<slot />
	<SvelteQueryDevtools />
</QueryClientProvider>

<style>
	:root {
		--header-height: 64px;
	}
</style>
