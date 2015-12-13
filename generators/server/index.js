'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

module.exports = yeoman.generators.Base.extend({
    prompting: function() {
        var done = this.async();
        var prompts = [
            {
                type: 'input',
                name: 'serverDirectory',
                message: 'Server root directory?',
                default: 'web'
            },
            {
                type: 'input',
                name: 'httpPort',
                message: 'HTTP server port?',
                default: '8111'
            },
            {
                type: 'input',
                name: 'websocketPort',
                message: 'WebSocket server port?',
                default: '13337'
            }
        ];
        this.prompt(prompts, function (props) {
            this.props = props;
            this.serverDirectory = props.serverDirectory;
            this.httpPort = props.httpPort;
            this.websocketPort = props.websocketPort;
            done();
        }.bind(this));
    },
    configuring: {
        projectfiles: function() {
            this.template('_package.json', 'package.json');
            this.template('_app.json', 'app.json');
            this.template('config/_default.js', 'config/default.js');
        }
    },
    writing: {
        serverFiles: function() {
            this.template('_index.js', 'index.js');
            this.template('_socket.js', this.serverDirectory + '/socket.js');//WebSocket server
            this.template('_server.js', this.serverDirectory + '/server.js');//HTTP server
        }
    },
    install: function () {
        this.npmInstall();
    }
});