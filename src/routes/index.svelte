<script>
	import Card from "$lib/components/Card.svelte";
	import CardBody from "$lib/components/CardBody.svelte";
	import CardTitle from "$lib/components/CardTitle.svelte";
  import Link from "$lib/components/Link.svelte";
</script>

<svelte:head>
	<title>The Catalyst Browser Project</title>
</svelte:head>

<div class="min-h-[100vh] dark:bg-gray-900 p-2">
	<h1 class="z-20 text-6xl leading-snug p-4 dark:text-gray-50 text-gray-900">
		Surf the web with the <br />
		<span class="text-emerald-400 font-bold">browser of the future.</span>
	</h1>
	<div class="flex flex-row flex-wrap row-span-3 space-x-6 flex-1">
    <span />
		<Card>
			<CardTitle>Private by design</CardTitle>
			<CardBody
				>The Catalyst browser has been designed from the ground up to provide a
				privacy-focused experience. The only server that Catalyst connects to is
				the update notifier, with no private information sent.</CardBody
			>
		</Card>
		<Card>
			<CardTitle>Open Source</CardTitle>
			<CardBody
				>All Catalyst code is free and open source for anyone to inspect and
				review. It is all licensed under MIT and anyone can review all of the
				code.</CardBody
			>
		</Card>
		<Card>
			<CardTitle>Modern</CardTitle>
			<CardBody
				>Catalyst is based on Electron, which supports almost all features of
				Google Chrome with peace of mind. Catalyst also has an elegant user
				interface with no unnecessary distractions.</CardBody
			>
		</Card>
		<Card>
			<CardTitle>Fast</CardTitle>
			<CardBody
				>Starts in seconds, no matter the hardware. Simply click on the icon and
				all of your browsing preferrences will appear in an instant.</CardBody
			>
		</Card>
	</div>
	<br class="mb-6" />
	<h1 class="p-4 text-6xl text-gray-900 dark:text-gray-50">
		This is <b class="text-emerald-400">Catalyst.</b>
	</h1>
</div>
<div class="p-4 min-h-3">
	<p class="text-2xl">
		We're working to make a fully-compatible with all web standards browser for
		the masses. We always emphasise privacy and security, which is why we are
		<b>fully open source</b>.
	</p>
	<br />
	<a
		href="https://github.com/JaydenDev/Catalyst/releases/latest"
		class="hover:underline hover:text-gray-200 text-2xl transition w-full min-h-3 bg-blue-400 p-2 rounded flex text-center justify-center">Ready to use Catalyst?</a
	>
	<p class="text-lg">Made by JaydenDev, webdev03, and <Link href="https://github.com/JaydenDev/Catalyst/graphs/contributors">other awesome contributors</Link>. Licensed under MIT License.</p>
</div>
