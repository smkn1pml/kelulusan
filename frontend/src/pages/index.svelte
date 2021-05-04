<script>
    import { metatags, goto, params, afterPageLoad } from "@roxi/routify";
    import config from "./../../config.js";
    import Alert from "./../components/Alert.svelte";
    import Form from "./../components/Form.svelte";

    let schoolName = config.school.name;
    $: metatags.title = "Cek Kelulusan - " + schoolName;

    let error = $params.error;
    let nisn;
    $: showError = false;
    $: errorText = "";

    function search() {
        if (nisn === undefined || nisn === null || (nisn || "").trim() === "") {
            errorText = "Nomor Induk Siswa Nasional tidak boleh kosong.";
            showError = true;

            return;
        }

        $goto("/detail/?nisn=" + nisn);
    }

    $afterPageLoad((page) => {
        if (error === "1") {
            errorText =
                "Nomor Induk Siswa Nasional yang kamu masukkan tidak dapat ditemukan.";
            showError = true;

            $goto("/");
        }
        if (error === "2") {
            errorText =
                "Silahkan hubungi administrator melalui icon WhatsApp di pojok kanan bawah, laporkan terkait masalah ini.";
            showError = true;

            $goto("/");
        }
    });
</script>

<Alert bind:showAlert={showError} alertTitle="Terjadi Kesalahan">
    {errorText}
</Alert>

<main class="mb-auto">
    <Form bind:nisn on:submit={search} />
</main>
