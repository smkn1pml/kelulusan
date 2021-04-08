<script>
    import {
        beforeUrlChange,
        isChangingPage,
        afterPageLoad,
    } from "@roxi/routify";

    import Navbar from "./../components/Navbar.svelte";
    import Footer from "./../components/Footer.svelte";
    import Spinner from "./../components/Spinner.svelte";

    let shown = "false";
    $beforeUrlChange((event, store) => {
        shown = "true";
        return true;
    });
    if ($isChangingPage) {
        shown = "true";
    }
    $afterPageLoad((page) => {
        setTimeout(() => {
            shown = "false";
        }, 500);
    });

    $: show = shown;
</script>

<!-- routify:options preload="proximity" -->

<Spinner {show} />

<div class="flex flex-col h-screen justify-between">
    <Navbar />

    <slot />

    <Footer />
</div>
