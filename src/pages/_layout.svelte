<script>
    import { isChangingPage } from "@roxi/routify";

    import Navbar from "./../components/Navbar.svelte";
    import Footer from "./../components/Footer.svelte";
    import Spinner from "./../components/Spinner.svelte";
</script>

<!-- routify:options preload="proximity" -->

{#if $isChangingPage}
    <Spinner />
{/if}

<div class="flex flex-col h-screen justify-between">
    <Navbar />

    <slot />

    <Footer />
</div>
