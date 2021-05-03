<script>
    import {
        beforeUrlChange,
        isChangingPage,
        afterPageLoad,
    } from "@roxi/routify";

    import config from "./../../config.js";
    let { whatsapp } = config.school.contact;

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

<a
    href="https://api.whatsapp.com/send?phone={whatsapp}&text={encodeURIComponent(
        "Assalamu'alaikum pak, maaf mengganggu waktunya, saya ... dari kelas ..., saya mengalami masalah saat ..."
    )}"
    class="floating-whatsapp"
    target="_blank"
>
    <i class="fa fa-whatsapp whatsapp-icon" />
</a>

<style>
    .main-container {
        margin-top: 64px;
    }

    .floating-whatsapp {
        position: fixed;
        width: 50px;
        height: 50px;
        bottom: 20px;
        right: 20px;
        background-color: #25d366;
        color: #fff;
        border-radius: 50px;
        text-align: center;
        font-size: 30px;
        /* box-shadow: 2px 2px 3px #999; */
        z-index: 100;
    }

    .whatsapp-icon {
        margin-top: 10.5px;
    }
</style>
