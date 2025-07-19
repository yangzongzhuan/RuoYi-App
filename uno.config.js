import presetWeapp from 'unocss-preset-weapp';
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer';

const {presetWeappAttributify, transformerAttributify} = extractorAttributify();

export default {
    presets: [
        presetWeapp({
            platform: 'uniapp',
        }),
        presetWeappAttributify(),
    ],
    shortcuts: [
        {
            'border-card': 'hover:shadow-card ',
            'border-base': 'border border-solid border-gray-100',
            'flex-center': 'flex flex-row items-center',
            'flex-col-center': 'flex flex-col items-center',
            'card-base': 'p-3  m-x-4 m-y-2 rounded-xl bg-white',
            'border-bottom': 'border-0 border-b-1 border-gray-1 border-solid',
            'huge-button-selected': 'bg-gradient-to-b from-[#c5e8ff] from-21% to-[#88C3FF] c-[#207DE9] h-92 w-334 text-36rpx font-bold rounded-lg after:border-0',
            'gradient-button': 'bg-gradient-to-b from-[#c5e8ff] from-21% to-[#88C3FF] c-[#207DE9] after:border-0',
            'detail-button': 'bg-gradient-to-b from-[#c5e8ff] from-21% to-[#c5e8ff] c-[#FFFFFF] after:border-0',
            'huge-button': 'bg-[#c6c6c6] c-white h-92 w-334 text-36rpx font-bold rounded-lg after:border-0',
            'blend-diff': '[mix-blend-mode:difference]',
            'blend-multiply': '[mix-blend-mode:multiply]',
            'blend-screen': '[mix-blend-mode:screen]',
            'blend-overlay': '[mix-blend-mode:overlay]'
        },
    ],

    transformers: [transformerAttributify(), transformerClass()],
    rules: [
        ['text-xxxxs', {'font-size': '16rpx '}],
        ['text-xxxs', {'font-size': '18rpx'}],
        ['text-xxs', {'font-size': '20rpx'}],
        ['text-xs', {'font-size': '24rpx'}],
    ],
    theme: {
        breakpoints: {
            xxs: '0px',
            xs: '375px',
            sm: '480px',
            md: '768px',
            lg: '960px',
            xl: '1280px',
            xxl: '1600px',
        },
        boxShadow: {
            card: 'rgba(0, 0, 0, 0.08) 0px 0px 3px 1px',
        },
        animation: {
            keyframes: {
                myscale: '{0% {transform: scale(1);} 100% {transform: scale(1.2);}}',
            },
            durations: {
                myscale: '0.2s',
            },
        },
    },
};
