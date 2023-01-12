import { defineConfig } from "vite";

export default defineConfig({
    base: './',
    build: {
      rollupOptions: {
        input: {
          main: './index.html',
          avatar: './pages/template__avatar.html',
          calendar: './pages/template__calendar.html',
          custom: './pages/template__custom.html',
          histogram: './pages/template__histogram.html',
          modal: './pages/template__modal.html',
          tooltip: './pages/template__tooltip.html',
        },
      },
    },
})