<script>
    import { Router } from "@roxi/routify";
    import { routes } from "../.routify/routes";

    import Serviceworker from "./Serviceworker.svelte";
</script>

<Serviceworker />

<Router {routes} />

<style global lang="postcss">
    @import "../assets/global.css";

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    html,
    body {
        @apply bg-gray-200;
    }
</style>
