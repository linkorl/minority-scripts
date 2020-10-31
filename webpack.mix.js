let mix = require('laravel-mix');
let ClosureCompilerPlugin = require('webpack-closure-compiler');

if (mix.inProduction()) {
    mix.webpackConfig({
        plugins: [
            new ClosureCompilerPlugin({
                compiler: {
                    language_in: 'ECMASCRIPT6',
                    language_out: 'ECMASCRIPT6',
                    compilation_level: 'ADVANCED',
                },
                concurrency: 3,
            }),
            // new JavaScriptObfuscator({
            //     compact: false,
            //
            //     controlFlowFlattening: true,
            //     controlFlowFlatteningThreshold: 0.5,
            //
            //     deadCodeInjection: false,
            //     deadCodeInjectionThreshold: 1.0,
            //
            //     debugProtection: false,
            //
            //     // disableConsoleOutput: true,
            //     transformObjectKeys: true,
            //
            //     identifiersPrefix: 'mi',
            //
            //     renameGlobals: true,
            //     rotateStringArray: true,
            //     selfDefending: false,
            //     stringArray: true,
            //     stringArrayEncoding: 'rc4',
            //     stringArrayThreshold: 0.5,
            //     target: 'node',
            //
            // }, [])
        ],
    });
}

mix.disableNotifications();

mix.ts('src/Developing/*.ts', 'dist')
    .copy('src/Developing/*.js', 'dist');
