<script>
    import {
        beforeUrlChange,
        isChangingPage,
        afterPageLoad,
    } from "@roxi/routify";

    import Navbar from "./../components/Navbar.svelte";
    import Footer from "./../components/Footer.svelte";
    import Spinner from "./../components/Spinner.svelte";

    $: showSpinner = false;

    $beforeUrlChange((event, store) => {
        showSpinner = true;

        return true;
    });

    if ($isChangingPage) {
        showSpinner = true;
    }

    $afterPageLoad((page) => {
        setTimeout(() => {
            showSpinner = false;
        }, 250);
    });
</script>

<!-- routify:options preload="proximity" -->

<Spinner show={showSpinner} />

<div class="flex flex-col h-screen justify-between">
    <Navbar />

    <div class="main-container">
        <slot />
    </div>

    <Footer />
</div>

<style>
    .main-container {
        margin-top: 64px;
    }
</style>
