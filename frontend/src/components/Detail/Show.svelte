<script>
    import config from "./../../../config";

    let date = new Date();
    let year = date.getFullYear();
    let schoolYear = year - 1 + "/" + year;

    export let status;
    export let un;
    export let nama;
    export let nisn;
    export let ttl;
    export let ortu;
    export let skl;

    let statusClass =
        (status || "").toLowerCase() === "lulus"
            ? "bg-green-400"
            : "bg-red-400";
</script>

<div class="max-w-7xl mx-auto sm:py-12 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
        <div class="{statusClass} shadow overflow-hidden sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6">
                <h3 class="text-xl font-medium text-gray-900">
                    Kamu dinyatakan <span class="font-extrabold">{status}</span>
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-900">
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
                            class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                        >
                            {un}
                        </dd>
                    </div>
                    <div
                        class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                    >
                        <dt class="text-sm font-medium text-gray-500">
                            Nama Siswa
                        </dt>
                        <dd
                            class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                        >
                            {nama}
                        </dd>
                    </div>
                    <div
                        class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                    >
                        <dt class="text-sm font-medium text-gray-500">
                            NISN Siswa
                        </dt>
                        <dd
                            class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                        >
                            {nisn}
                        </dd>
                    </div>
                    <div
                        class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                    >
                        <dt class="text-sm font-medium text-gray-500">
                            Tempat, Tanggal Lahir
                        </dt>
                        <dd
                            class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                        >
                            {ttl}
                        </dd>
                    </div>
                    <div
                        class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                    >
                        <dt class="text-sm font-medium text-gray-500">
                            Nama Orang Tua
                        </dt>
                        <dd
                            class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                        >
                            {ortu}
                        </dd>
                    </div>
                    {#if statusClass === "bg-green-400"}
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
                                        class="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                                    >
                                        <div
                                            class="w-0 flex-1 flex items-center"
                                        >
                                            <!-- Heroicon name: solid/paper-clip -->
                                            <svg
                                                class="flex-shrink-0 h-5 w-5 text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                            <span
                                                class="ml-2 flex-1 w-0 truncate"
                                            >
                                                Surat Keterangan Lulus
                                            </span>
                                        </div>
                                        <div class="ml-4 flex-shrink-0">
                                            <a
                                                target="_blank"
                                                href={skl}
                                                class="font-medium text-indigo-600 hover:text-indigo-500"
                                            >
                                                Unduh
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </dd>
                        </div>
                    {/if}
                </dl>
            </div>
        </div>
    </div>
</div>
