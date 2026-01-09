import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // bei eigener Domain so korrekt
  plugins: [react()],
});
