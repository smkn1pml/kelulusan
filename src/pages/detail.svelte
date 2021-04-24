<script>
    import { metatags, params } from "@roxi/routify";
    import axios from "axios";
    import FormData from "form-data";
    import config from "./../../config.js";
    import Alert from "./../components/Alert.svelte";
    import Fallback from "./_fallback.svelte";

    import Show from "./../components/Detail/Show.svelte";
    import Skeleton from "./../components/Detail/Skeleton.svelte";

    let nisn = $params.nisn;

    $: metatags.title;
    $: skeletonDetail = true;
    $: showError = false;
    $: showDetail = true;
    $: detailData = {};

    if (nisn) {
        let form = new FormData();
        form.append("nisn", nisn);

        skeletonDetail = true;

        axios
            .post(config.database, form, {
                headers: {
                    "Content-Type": `multipart/form-data; boundary=${form._boundary}`,
                },
            })
            .then(function (result) {
                let { data } = result;

                skeletonDetail = false;

                if (data.data.length > 0) {
                    detailData = data.data[0];
                    showDetail = true;

                    const capitalize = (words) => {
                        let separateWord = words.toLowerCase().split(" ");
                        for (let i in separateWord) {
                            separateWord[i] =
                                separateWord[i].charAt(0).toUpperCase() +
                                separateWord[i].substring(1);
                        }
                        return separateWord.join(" ");
                    };

                    metatags.title =
                        capitalize(detailData.nama) +
                        " - " +
                        config.school.name;
                } else showDetail = false;
            })
            .catch(function (error) {
                console.error(error);

                skeletonDetail = false;

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

{#if nisn && showDetail}
    <main class="mb-auto">
        {#if skeletonDetail}
            <Skeleton />
        {:else}
            <Show {...detailData} />
        {/if}
    </main>
{:else}
    <Fallback />
{/if}
