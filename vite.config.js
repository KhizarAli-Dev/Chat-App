// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Isse server local network se access ho sakega
    port: 3000, // Port ko zaroorat ke mutabiq change kar sakte hain
  },
});
