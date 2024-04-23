<script lang="ts">
	import { Select as SelectPrimitive } from 'bits-ui';
	import MdiChevronDown from '~icons/mdi/chevron-down'
	import { cn } from '$lib/utils.js';

	type $$Props = SelectPrimitive.TriggerProps;
	type $$Events = SelectPrimitive.TriggerEvents;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<SelectPrimitive.Trigger
	class={cn(
		'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground data-[placeholder]:text-muted-foreground focus:outline focus:outline-1 focus:outline-primary disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
		className
	)}
	{...$$restProps}
	let:builder
	on:click
	on:keydown
>
	<slot {builder}/>
	<div>
		<MdiChevronDown class="h-4 w-4 opacity-50" />
	</div>
</SelectPrimitive.Trigger>
