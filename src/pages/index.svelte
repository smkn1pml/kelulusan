<script>
    import { metatags, goto } from "@roxi/routify";
    import axios from "axios";
    import FormData from "form-data";
    import config from "./../../config.js";
    import Alert from "./../components/Alert.svelte";
    import Spinner from "./../components/Spinner.svelte";
    import Form from "./../components/Form.svelte";

    let schoolName = config.school.name;
    $: metatags.title = "Cek Kelulusan - " + schoolName;

    let nisn;
    let errorTitle = "Terjadi Kesalahan";
    let notFound = "Tidak Ditemukan";

    $: showSpinner = false;
    $: showError = false;
    $: showNotFound = false;
    $: errorText = "";

    function search() {
        if (nisn === undefined || nisn === null || (nisn || "").trim() === "") {
            errorText = "Nomor Induk Siswa Nasional tidak boleh kosong.";
            showError = true;

            return;
        }

        let form = new FormData();
        form.append("nisn", nisn);

        showSpinner = true;

        axios
            .post(config.database, form, {
                headers: {
                    "Content-Type": `multipart/form-data; boundary=${form._boundary}`,
                },
            })
            .then(function (result) {
                let { data } = result;

                if (data.result === "error") {
                    errorText =
                        "Silahkan hubungi administrator melalui halaman kontak, laporkan terkait masalah ini.";
                    showError = true;

                    showSpinner = false;
                    return;
                }

                data = data.data;
                if (!data.length) {
                    showNotFound = true;

                    showSpinner = false;
                    return;
                }

                showSpinner = false;
                $goto("/detail/?un=" + data[0].un);
            })
            .catch(function (error) {
                console.error(error);
                errorText =
                    "Silahkan hubungi administrator melalui halaman kontak, laporkan terkait masalah ini.";
                showError = true;

                showSpinner = false;
            });
    }
</script>

<Alert bind:showAlert={showError} alertTitle={errorTitle}>
    {errorText}
</Alert>

<Alert bind:showAlert={showNotFound} alertTitle={notFound}>
    NISN yang kamu masukkan tidak dapat ditemukan. Silahkan periksa kembali dan
    pastikan bahwa data tersebut sudah benar. Jika masih ada kesulitan, silahkan
    buka halaman kontak.
</Alert>

<Spinner show={showSpinner} />

<main class="mb-auto">
    <Form bind:nisn on:submit={search} />
</main>
