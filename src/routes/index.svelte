<script>
  import Card from "$lib/components/Card.svelte";
  import CardBody from "$lib/components/CardBody.svelte";
  import CardTitle from "$lib/components/CardTitle.svelte";
</script>

<div class="h-[100vh] flex dark:bg-gray-900 p-2">
  <h1 class="z-20 text-[3em] leading-snug p-4 dark:text-white text-gray-900">
    Surf the web with the <br />
    <span class="text-emerald-400 font-bold">browser of the future.</span>
  </h1>
  <div class="">
    <Card>
      <CardTitle>Private by design</CardTitle>
      <CardBody>The Catalyst browser has been designed from the ground up to provide a privacy-focused experience. The only server that Catalyst connects to is the update notifier, with no private information sent.</CardBody>
    </Card>
    <Card>
      <CardTitle>Open Source</CardTitle>
      <CardBody>All Catalyst code is free and open source for anyone to inspect and review. It is all licensed under MIT and</CardBody>
    </Card>
    <Card>
      <CardTitle>Open Source</CardTitle>
      <CardBody>All Catalyst code is freeee and open source for anyone to inspect and review. It is all licensed under MIT and</CardBody>
    </Card>
  </div>
</div>

<div class="p-2">
  <br />
<br />
<p class="text-2xl">
	This is <b class="text-emerald-400">Catalyst</b>. We're working to make a
	fully-compatible with all web standards browser for the masses. We always
	emphasise privacy and security, which is why we are
	<b>fully open source</b>.
</p>
<br />
<br />
<hr />
<a
	href="https://github.com/JaydenDev/Catalyst/releases/latest"
	class="hover:underline hover:text-gray-700 transition">Download Now</a
>
<p>
	Made by
  JaydenDev, webdev03, and other awesome
	contributors.
</p>

</div>
