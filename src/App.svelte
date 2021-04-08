<script>
    import { Router } from "@roxi/routify";
    import { routes } from "../.routify/routes";
</script>

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
