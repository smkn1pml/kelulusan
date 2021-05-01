<script>
    import { metatags, goto } from "@roxi/routify";
    import config from "./../../config.js";
    import Alert from "./../components/Alert.svelte";
    import Form from "./../components/Form.svelte";

    let schoolName = config.school.name;
    $: metatags.title = "Cek Kelulusan - " + schoolName;

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
</script>

<Alert bind:showAlert={showError} alertTitle="Terjadi Kesalahan">
    {errorText}
</Alert>

<main class="mb-auto">
    <Form bind:nisn on:submit={search} />
</main>
