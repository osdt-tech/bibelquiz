import { defineConfig, loadEnv, type ConfigEnv } from 'vite';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv) => {
    const env = loadEnv(mode, process.cwd(), '');
    process.env = { ...process.env, ...env };
    // ChurchTools Extensions werden unter /ccm/<key>/ gehostet
    // GitHub Pages braucht VITE_BASE (z.B. /bibelquiz/)
    const base = env.VITE_BASE || `/ccm/${env.VITE_KEY}/`;
    return defineConfig({
        base,
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
    });
};
