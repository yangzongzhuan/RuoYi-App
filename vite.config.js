import { loadEnv } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import path from 'path';
import viteCompression from 'vite-plugin-compression';


// https://vitejs.dev/config/
export default async (command, mode) => {
    const env = loadEnv(mode, __dirname, 'RUOYI_');
    const UnoCss = await import('unocss/vite').then((i) => i.default);
    return {
        envPrefix: "RUOYI_",
        plugins: [
            uni(),
            mode === 'production' && viteCompression({
                verbose: false,
                disable: false,
                threshold: 10240,
                algorithm: 'gzip',
                ext: '.gz',
            }),
            UnoCss()
        ].filter(Boolean),
        server: {
            host: true,
            port: env.RUOYI_PORT,
            hmr: {
                overlay: true,
            },
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
    };
};
