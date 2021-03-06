/**
 * @file Main entry point for application
 * @author <%= userName %>
 * @requires app
 * @requires router
 * @requires views/example
**/<% if (moduleFormat === 'amd') { %>
define(function(require) {<% } %>
    'use strict';

    const Backbone = require('backbone');
    const WebApp   = require('app');
    const Example  = require('router');
    const View     = require('views/example');

    const name = WebApp.getState('name');

    WebApp.on('before:start', () => {
        WebApp.info(`${name} is starting...`);
        WebApp.router = new Example.Router();
    });
    WebApp.on('start', () => {
        Backbone.history.start();
        WebApp.info(`${name} is started!`);
        WebApp.getRegion().show(new View());
    });
<% if (moduleFormat === 'amd') { %>
    WebApp.start();
});<% } else { %>
    document.addEventListener('DOMContentLoaded', () => WebApp.start());
<% } %>
