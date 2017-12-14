/* @flow */
const {set}     = require('lodash');
const Generator = require('yeoman-generator');
const banner    = require('../app/banner');
const footer    = require('../app/doneMessage');
const {
    copy,
    copyTpl,
    json: {extend}
} = require('../app/utils');

const COMMAND_LINE_OPTIONS = {
    skipWebapp: {
        type: Boolean,
        desc: 'DO NOT compose with WebApp generator',
        defaults: false
    }
};

module.exports = class extends Generator {
    initializing() {
        this.log(banner);
    }
    constructor(args: any, opts: any) {
        super(args, opts);
        const generator = this;
        const {config, options} = generator;
        Object.keys(COMMAND_LINE_OPTIONS).forEach(option => {
            generator.option(option, COMMAND_LINE_OPTIONS[option]);
        });
        config.set('userName', generator.user.git.name() ? generator.user.git.name() : 'A. Developer');
        config.defaults({
            isComposed: true,
            isWebapp: !options.skipWebapp,
            isNative: true,
            hideBanner: true
        });
        generator.composeWith(require.resolve('../project'), options);
        if (config.get('isWebapp')) {
            generator.composeWith(require.resolve('../webapp'), options);
        }
    }
    writing() {
        const generator = this;
        const {config} = generator;
        const isWebapp = config.get('isWebapp');
        const rendererIndexPath = isWebapp ? 'app/index.html' : 'index.html';
        copy('bin/preload.js', 'bin/preload.js', generator);
        copyTpl('_index.html', config.get('sourceDirectory') + rendererIndexPath, generator);
        copyTpl('_index.js', 'index.js', set(generator, 'rendererIndexPath', rendererIndexPath));
    }
    install() {
        //
        // Install dependencies
        //
        const dependencies = [
            'electron',
            'electron-context-menu',
            'electron-debug',
            'electron-is-dev'
        ];
        const devDependencies = [
            'spectron'
        ].concat(// work in progress
            // 'devtron',// waiting on https://github.com/electron/devtron/issues/96
            // 'electron-builder',// https://github.com/electron-userland/electron-builder
            // 'electron-packager'// https://github.com/electron-userland/electron-packager
        );
        this.npmInstall(dependencies, {save: true});
        this.npmInstall(devDependencies, {saveDev: true});
        //
        // Configure package.json
        //
        extend(this.destinationPath('package.json'), {
            main: './index.js',
            scripts: {
                start: 'electron index',
                'start:dev': 'npm start -- --enable-logging'
            }
        });
    }
    end() {
        this.log(footer(this));
    }
};