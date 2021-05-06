const production = !process.env.ROLLUP_WATCH;

module.exports = {
    theme: {
        extend: {
            spacing: {
                128: '32rem'
            }
        }
    },
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
    purge: {
        content: ["./src/**/*.svelte"],
        enabled: production
    }
};