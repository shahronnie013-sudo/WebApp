import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        tailwindcss(),
    ],
<<<<<<< HEAD
    server: {
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
=======
>>>>>>> d62c62d02be38ce9c79ceb6b419b7969e5c03304
});
