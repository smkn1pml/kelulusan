<script>
    import { metatags } from "@roxi/routify";
    import config from "./../../config.js";
    import Form from "./../components/Form.svelte";

    let school_name = config.school.name;
    $: metatags.title = "Cek Kelulusan - " + school_name;
</script>

<main class="mb-auto">
    <Form {school_name} />
</main>

<style>
</style>
