<script>
    import { url, metatags } from "@roxi/routify";
    import config from "./../../config.js";

    let school_name = config.school.name;
    $: metatags.title = "Page Not Found - " + school_name;
</script>

<main class="mb-auto">
    <div class="not-found grid place-items-center">
        <div class="text-gray-800">
            <h1 class="text-7xl font-medium">404</h1>
            <p class="mt-0 mb-8 font-thin text-3xl">Page Not Found</p>

            <a
                href={$url("./../")}
                class="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md focus:outline-none"
            >
                Kembali Beranda
            </a>
        </div>
    </div>
</main>

<style>
    .not-found {
        height: calc(100vh - 68px - 152px);
    }
</style>
