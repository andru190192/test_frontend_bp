/// <reference types="vitest" />
/// <reference types="Vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest-setup.tsx'],
    coverage: {
      enabled: true,
      provider: "v8",
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/mocks/**',
        'src/App.tsx',
        'src/main.tsx',
        '**/*.{d,stories}.{ts,tsx}',
        '**/{types,interfaces}.{ts,tsx}',
        '**/msw/**',
      ],
    },
  },
})
