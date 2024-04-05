<script lang="ts">
	import MaterialSymbolsLightLists from '~icons/material-symbols-light/lists';
	import * as Sheet from '$lib/components/ui/sheet';
	import Button from '$lib/components/ui/button/button.svelte';
	import Navigation from './Navigation.svelte';
</script>

<Sheet.Root >
	<Sheet.Trigger asChild let:builder>
		<Button builders={[builder]} class='md:hidden' variant='icon'>
			<MaterialSymbolsLightLists class='text-xl' />
		</Button>
	</Sheet.Trigger>
	<Sheet.Content side='right'>
		<Sheet.Header class="">
			<Sheet.Title>Menu</Sheet.Title>
		</Sheet.Header>

        <div class='pt-10'>
            <Navigation />
        </div>
	</Sheet.Content>
</Sheet.Root>
