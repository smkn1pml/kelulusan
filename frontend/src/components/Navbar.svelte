<script>
    import { slide } from "svelte/transition";
    import { isActive, url, beforeUrlChange } from "@roxi/routify";
    import config from "./../../config.js";
    import { clickOutside } from "./../clickOutside";

    let links = [
        ["/index", "Beranda"],
        ["/about", "Tentang"],
        ["/contact", "Kontak"],
    ];

    const classToggle = (condition, yes, no) => {
        if (condition === true) return yes;
        return no;
    };

    let openMobileNav = false;

    const toggleMobileNav = () => {
        openMobileNav = !openMobileNav;
    };

    $beforeUrlChange((event, store) => {
        openMobileNav = false;

        return true;
    });
</script>

<nav
    use:clickOutside
    on:click_outside={() => (openMobileNav = false)}
    class="fixed z-10 w-full bg-gray-800"
>
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
                <a
                    on:click={() => (openMobileNav = false)}
                    href={$url("./")}
                    class="flex-shrink-0"
                >
                    <img
                        class="h-10 w-auto"
                        src={config.school.logo}
                        alt={config.school.name}
                    />
                </a>
            </div>
            <div class="hidden md:block">
                <div class="ml-4 flex items-center md:ml-6">
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            {#each links as [path, name]}
                                {#if $isActive(path)}
                                    <a
                                        href={$url(path)}
                                        class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >{name}</a
                                    >
                                {:else}
                                    <a
                                        href={$url(path)}
                                        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >{name}</a
                                    >
                                {/if}
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
            <div class="-mr-2 flex md:hidden">
                <!-- Start mobile menu button -->
                <button
                    type="button"
                    on:click={toggleMobileNav}
                    class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                >
                    <span class="sr-only">Open main menu</span>
                    <svg
                        class="{classToggle(
                            openMobileNav,
                            'hidden',
                            'block'
                        )} h-6 w-6"
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
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    <svg
                        class="{classToggle(
                            openMobileNav,
                            'block',
                            'hidden'
                        )} h-6 w-6"
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
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <!-- End mobile menu button -->
            </div>
        </div>
    </div>

    <!-- Start mobile menu -->
    {#if openMobileNav}
        <div
            transition:slide
            class="md:hidden border-t border-gray-700"
            id="mobile-menu"
        >
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {#each links as [path, name]}
                    {#if $isActive(path)}
                        <a
                            on:click={toggleMobileNav}
                            href={$url(path)}
                            class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                            >{name}</a
                        >
                    {:else}
                        <a
                            on:click={toggleMobileNav}
                            href={$url(path)}
                            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >{name}</a
                        >
                    {/if}
                {/each}
            </div>
        </div>
    {/if}
    <!-- End mobile menu -->
</nav>
