// Separate build config for deploying the app itself (index.html + main.tsx) as a static
// site on GitHub Pages. Kept apart from vite.config.ts, which builds src/ as a library for
// Figma Make and has no HTML entry point.
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react(), tailwindcss()],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
  assetsInclude: ['**/*.svg', '**/*.csv'],
  build: {
    outDir: 'dist-pages',
  },
})
