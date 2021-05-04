<script>
    import config from "./../../../config";

    let date = new Date();
    let year = date.getFullYear();
    let schoolYear = year - 1 + "/" + year;
</script>

<div class="max-w-7xl mx-auto sm:py-12 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
        <div class="shadow overflow-hidden sm:rounded-lg">
            <div class="skeleton-box px-4 py-5 sm:px-6">
                <h3 class="invisible text-xl font-medium text-gray-900">
                    Kamu dinyatakan <span class="font-extrabold" />
                </h3>
                <p class="invisible mt-1 max-w-2xl text-sm text-gray-900">
                    oleh satuan pendidikan {config.school.name} tahun pelajaran {schoolYear}.
                </p>
            </div>
            <div>
                <dl>
                    <div
                        class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                    >
                        <dt class="text-sm font-medium text-gray-500">
                            Nomor Ujian Nasional
                        </dt>
                        <dd
                            class="mt-1 sm:mt-0 sm:col-span-2 skeleton-box inline-block h-4 w-1/2"
                        />
                    </div>
                    <div
                        class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                    >
                        <dt class="text-sm font-medium text-gray-500">
                            Nama Siswa
                        </dt>
                        <dd
                            class="mt-1 sm:mt-0 sm:col-span-2 skeleton-box inline-block h-4 w-1/2"
                        />
                    </div>
                    <div
                        class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                    >
                        <dt class="text-sm font-medium text-gray-500">
                            NISN Siswa
                        </dt>
                        <dd
                            class="mt-1 sm:mt-0 sm:col-span-2 skeleton-box inline-block h-4 w-1/2"
                        />
                    </div>
                    <div
                        class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                    >
                        <dt class="text-sm font-medium text-gray-500">
                            Tempat, Tanggal Lahir
                        </dt>
                        <dd
                            class="mt-1 sm:mt-0 sm:col-span-2 skeleton-box inline-block h-4 w-1/2"
                        />
                    </div>
                    <div
                        class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                    >
                        <dt class="text-sm font-medium text-gray-500">
                            Nama Orang Tua
                        </dt>
                        <dd
                            class="mt-1 sm:mt-0 sm:col-span-2 skeleton-box inline-block h-4 w-1/2"
                        />
                    </div>
                    <div
                        class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                    >
                        <dt class="text-sm font-medium text-gray-500">
                            Lampiran
                        </dt>
                        <dd
                            class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                        >
                            <ul
                                class="border border-gray-200 rounded-md divide-y divide-gray-200"
                            >
                                <li
                                    class="flex items-center justify-between skeleton-box inline-block h-11 w-100"
                                />

                                <li
                                    class="flex items-center justify-between skeleton-box inline-block h-11 w-100"
                                />
                            </ul>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
</div>
