<script>
    import { metatags, params } from "@roxi/routify";
    import axios from "axios";
    import FormData from "form-data";
    import config from "./../../config.js";
    import Alert from "./../components/Alert.svelte";
    import Fallback from "./_fallback.svelte";
    import Detail from "./../components/Detail.svelte";

    let un = $params.un;

    $: metatags.title;
    $: showError = false;
    $: showDetail = true;
    $: detailData = {};

    if (un) {
        let form = new FormData();
        form.append("un", un);

        axios
            .post(config.database, form, {
                headers: {
                    "Content-Type": `multipart/form-data; boundary=${form._boundary}`,
                },
            })
            .then(function (result) {
                let { data } = result;

                if (data.data.length > 0) {
                    detailData = data.data[0];
                    showDetail = true;
                } else showDetail = false;
            })
            .catch(function (error) {
                console.error(error);

                showError = true;
                detailData = {};
                showDetail = false;
            });
    }
</script>

<Alert bind:showAlert={showError} alertTitle="Terjadi Kesalahan">
    Silahkan hubungi administrator melalui halaman kontak, laporkan terkait
    masalah ini.
</Alert>

{#if showDetail}
    <main class="mb-auto">
        <Detail {...detailData} />
    </main>
{:else}
    <Fallback />
{/if}
