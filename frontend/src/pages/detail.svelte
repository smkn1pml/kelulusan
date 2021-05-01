<script>
    import { metatags, params } from "@roxi/routify";
    import axios from "axios";
    import FormData from "form-data";
    import config from "./../../config.js";
    import Alert from "./../components/Alert.svelte";
    import Fallback from "./_fallback.svelte";

    import Skeleton from "./../components/Detail/Skeleton.svelte";
    import Detail from "./../components/Detail/Show.svelte";

    let nisn = $params.nisn;
    $: title = "Cek Kelulusan - " + config.school.name;

    $: metatags.title = title;
    $: skeletonDetail = true;
    $: showError = false;
    $: showDetail = true;
    $: detailData = {};

    const capitalize = (words) => {
        let separateWord = words.toLowerCase().split(" ");
        for (let i = 0; i < separateWord.length; i++) {
            separateWord[i] =
                separateWord[i].charAt(0).toUpperCase() +
                separateWord[i].substring(1);
        }
        return separateWord.join(" ");
    };

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

                    title = capitalize(detailData.nama) + " - Cek Kelulusan";
                } else showDetail = false;
            })
            .catch(function () {
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
            <Detail {...detailData} />
        {/if}
    </main>
{:else}
    <Fallback />
{/if}
