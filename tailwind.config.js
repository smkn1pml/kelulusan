const production = !process.env.ROLLUP_WATCH;

module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
    purge: {
        content: ["./src/**/*.svelte"],
        enabled: production,
    },
};