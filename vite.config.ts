import { defineConfig, loadEnv, type ConfigEnv } from 'vite';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv) => {
    const env = loadEnv(mode, process.cwd(), '');
    process.env = { ...process.env, ...env };
    const base = env.VITE_BASE || '/';
    return defineConfig({
        base,
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
    });
};
