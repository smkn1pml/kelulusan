<script>
    import { createEventDispatcher } from "svelte";
    import config from "./../../config.js";

    export let nisn = "";
    const dispatch = createEventDispatcher();

    let date = new Date();

    let schoolName = config.school.name;
    let year = date.getFullYear();
    let schoolYear = year - 1 + "/" + year;

    const enter = (e) => {
        if (e.charCode === 13) submit();
    };
    const submit = () => dispatch("submit");
</script>

<div class="form-container max-w-5xl mx-auto py-6 sm:px-6 lg:px-8">
    <div class="md:grid md:grid-cols-5 md:gap-6">
        <div class="md:col-span-2">
            <div class="px-4 sm:px-0 text-center sm:text-left">
                <h2 class="text-3xl font-extralight text-gray-900">
                    Pengumuman Kelulusan
                </h2>
                <h3 class="mt-1 text-xl font-medium text-gray-900">
                    {schoolName}
                </h3>
                <p class="mt-1 text-sm text-gray-600">
                    Tahun Pelajaran {schoolYear}
                </p>
            </div>
        </div>
        <div class="mt-7 md:mt-0 md:col-span-3">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div class="col-span-6">
                        <label
                            for="student_number"
                            class="block text-base font-normal text-gray-700"
                        >
                            Nomor Induk Siswa Nasional
                        </label>
                        <input
                            bind:value={nisn}
                            on:keypress={enter}
                            type="text"
                            name="student_number"
                            id="student_number"
                            autocomplete="student-number"
                            placeholder="Masukkan NISN kamu"
                            class="mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                        <p class="mt-4 text-sm text-gray-500">
                            Jika tidak mengetahui Nomor Induk Siswa Nasional
                            kamu, bisa lakukan pengecekan <a
                                class="text-indigo-600 hover:text-indigo-500"
                                href="https://nisn.data.kemdikbud.go.id/index.php/Cindex/caribynama/"
                                target="_blank">di sini</a
                            >.
                        </p>
                    </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                        on:click={submit}
                        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
                    >
                        Cek Status Kelulusan
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .form-container {
        min-height: 390px;
        height: calc(100vh - 64px - 144px);
        display: grid;
        place-content: center stretch;
    }
</style>
