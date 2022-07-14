import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // #48484e
    ['transicao','hover:cursor-pointer invisible group-hover:visible   ease-in-out delay-50  text-primary-900  hover:-translate-y-1 hover:scale-110 hover:text-blue-900 duration-600 mx-2'],
    ['bg-dark', 'dark:bg-[#18181c]'],
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  rules: [
    ['custom-rule', { color: 'red' }]
  ],
  theme: {
    colors: {
      primary: {
        contrast: "white",
        900: "#18a058",
      }
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
  presetIcons({
      collections: {
        custom: {
          circle: '<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="50"></circle></svg>',
          /* ... */
        },
        carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default as any),
        /* ... */
      }
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
