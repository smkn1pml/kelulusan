<script>
    import { metatags } from "@roxi/routify";
    import config from "./../../config.js";

    $: metatags.title = "Kontak - Cek Kelulusan";
</script>

<main class="mb-auto">
    <div class="form-container max-w-6xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="md:grid md:grid-cols-2 md:gap-6">
            <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                    <h3 class="text-xl font-medium text-gray-900">Kontak</h3>
                    <p class="mt-2 text-sm text-gray-600">
                        Hubungi kami jika kamu membutuhkan bantuan.
                    </p>
                </div>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-1">
                <div class="shadow sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                        <div>
                            <div class="relative grid gap-6 bg-white sm:gap-8">
                                <a
                                    href={config.school.website}
                                    target="_blank"
                                    class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                >
                                    <!-- Heroicon name: outline/globe -->
                                    <svg
                                        class="flex-shrink-0 h-6 w-6 text-indigo-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <div class="ml-4">
                                        <p
                                            class="text-base font-medium text-gray-900"
                                        >
                                            Website
                                        </p>
                                        <p class="mt-1 text-sm text-gray-500">
                                            {config.school.website}
                                        </p>
                                    </div>
                                </a>

                                <a
                                    href="mailto:{config.school.contact.email}"
                                    class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                >
                                    <!-- Heroicon name: outline/at-symbol -->
                                    <svg
                                        class="flex-shrink-0 h-6 w-6 text-indigo-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                    <div class="ml-4">
                                        <p
                                            class="text-base font-medium text-gray-900"
                                        >
                                            E-mail
                                        </p>
                                        <p class="mt-1 text-sm text-gray-500">
                                            {config.school.contact.email}
                                        </p>
                                    </div>
                                </a>

                                <a
                                    href="tel:{config.school.contact.phone}"
                                    class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                >
                                    <!-- Heroicon name: outline/phone -->
                                    <svg
                                        class="flex-shrink-0 h-6 w-6 text-indigo-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                    <div class="ml-4">
                                        <p
                                            class="text-base font-medium text-gray-900"
                                        >
                                            Telepon
                                        </p>
                                        <p class="mt-1 text-sm text-gray-500">
                                            {config.school.contact.phone}
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
