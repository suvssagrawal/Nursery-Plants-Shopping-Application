import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/Nursery-Plants-Shopping-Application",
  plugins: [react()],
});

