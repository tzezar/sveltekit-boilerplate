<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
    import * as Card from "$lib/components/ui/card/index.js";

</script>

<div class="w-full h-screen lg:grid  lg:grid-cols-2 ">
	<div class="flex items-center justify-center my-auto py-12">
		<Card.Root class="mx-auto max-w-sm">
      <Card.Header>
        <Card.Title class="text-xl">Sign Up</Card.Title>
        <Card.Description>Enter your information to create an account</Card.Description>
      </Card.Header>
      <Card.Content>
        <div class="grid gap-4">
          <div class="grid grid-cols-2 gap-4">
            <div class="grid gap-2">
              <Label for="first-name">First name</Label>
              <Input id="first-name" placeholder="Max" required />
            </div>
            <div class="grid gap-2">
              <Label for="last-name">Last name</Label>
              <Input id="last-name" placeholder="Robinson" required />
            </div>
          </div>
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div class="grid gap-2">
            <Label for="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <Button type="submit" class="w-full">Create an account</Button>
          <Button variant="outline" class="w-full">Sign up with GitHub</Button>
        </div>
        <div class="mt-4 text-center text-sm">
          Already have an account?
          <a href="/login" class="underline"> Sign in </a>
        </div>
      </Card.Content>
    </Card.Root>
	</div>
	<div class="hidden bg-muted lg:block">
		<img
			src="https://images.unsplash.com/photo-1713766185582-11567ca38b4b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			alt="placeholder"
			width="1920"
			height="1080"
			class="h-full w-full max-h-screen object-cover dark:brightness-[0.2] dark:grayscale"
		/>
	</div>
</div>
