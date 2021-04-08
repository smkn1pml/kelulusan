<script>
    export let school_name;

    let date = new Date();
    let year = date.getFullYear();
</script>

<div class="form-container max-w-5xl mx-auto py-6 sm:px-6 lg:px-8">
    <div class="md:grid md:grid-cols-5 md:gap-6">
        <div class="md:col-span-2">
            <div class="px-4 sm:px-0">
                <h2 class="text-3xl font-extralight text-gray-900">
                    Pengumuman Kelulusan
                </h2>
                <h3 class="mt-0 text-xl font-medium text-gray-900">
                    {school_name}
                </h3>
                <p class="mt-0 text-sm text-gray-600">
                    Tahun Pelajaran {year - 1}/{year}
                </p>
            </div>
        </div>
        <div class="mt-7 md:mt-0 md:col-span-3">
            <form action="#" method="POST">
                <div class="shadow sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                        <div class="col-span-6">
                            <label
                                for="student_number"
                                class="block text-base font-light text-gray-700"
                            >
                                Nomor Induk Siswa Nasional
                            </label>
                            <input
                                type="text"
                                name="student_number"
                                id="student_number"
                                autocomplete="student-number"
                                placeholder="00xxxxxxxx"
                                class="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                            type="submit"
                            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Cek Status Kelulusan
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

<style>
    .form-container {
        min-height: 390px;
        height: calc(100vh - 64px - 156px);
        display: grid;
        place-content: center stretch;
    }
</style>
