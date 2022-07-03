import { URL, fileURLToPath } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
    AutoImport({
      imports: [
        'vue',
      ],
    }),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
      ],
      shortcuts: {
        // MUButton
        'mu-btn': 'box-border text-sm font-bold py-3 px-8 flex items-center justify-center rounded-xl border transition relative overflow-hidden hover:scale-[1.04] active:scale-[1.06] disabled:hover:scale-100 disabled:hover:cursor-not-allowed',
        'mu-btn-default': 'bg-[#5D5FEF] border-[#5D5FEF] text-white hover:bg-[#7879F1] hover:border-[#7879F1] active:bg-[#7879F1] active:border-[#7879F1] disabled:opacity-40 disabled:bg-[#5D5FEF]',
        'mu-btn-outline': 'bg-transparent border-[#5D5FEF] text-[#5D5FEF] hover:bg-[#D7D8FC] hover:border-[#5D5FEF] hover:text-[#5D5FEF] active:bg-[#D7D8FC] disabled:opacity-40 disabled:bg-[#C6C6FF] disabled:border-[#EEEEEE] disabled:text-[#5D5FEF]',
        'mu-btn-ghost': 'bg-transparent border-transparent text-[#5D5FEF] hover:bg-[#555555]/[.1] active:bg-[#555555]/[.1] disabled:opacity-40 disabled:bg-transparent disabled:border-transparent disabled:text-[#5D5FEF]',
        // MUIconButton
        'mu-icon-btn': 'box-border text-sm font-bold py-3 px-4 flex items-center justify-center rounded-lg bg-white text-black border border-[#EEEEEE] transition',
        'mu-icon-btn-default': 'hover:bg-[#F8F8F8] hover:border-[#EEEEEE] active:bg-[#F8F8F8]',
        'mu-icon-btn-disabled': 'opacity-40',
        // MUTag
        'mu-tag': 'box-border text-xs font-bold py-2 px-4 flex items-center justify-center rounded-lg border border-[#EEEEEE] transition',
        'mu-tag-default': 'bg-white text-black hover:bg-[#D7D8FC] hover:border-[#D7D8FC] hover:text-[#5D5FEF] active:bg-[#D7D8FC] active:text-[#5D5FEF] disabled:opacity-40 disabled:bg-white disabled:text-black',
        'mu-tag-active': 'bg-[#D7D8FC] border-[#D7D8FC] text-[#5D5FEF]',

      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
