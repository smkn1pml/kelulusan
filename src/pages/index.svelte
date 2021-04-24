<script>
    import { metatags, goto } from "@roxi/routify";
    import config from "./../../config.js";
    import Form from "./../components/Form.svelte";

    let schoolName = config.school.name;
    $: metatags.title = "Cek Kelulusan - " + schoolName;

    let nisn;

    function search() {
        if (nisn === undefined || nisn === null || (nisn || "").trim() === "") {
            errorText = "Nomor Induk Siswa Nasional tidak boleh kosong.";
            showError = true;

            return;
        }

        $goto("/detail/?nisn=" + nisn);
    }
</script>

<main class="mb-auto">
    <Form bind:nisn on:submit={search} />
</main>
