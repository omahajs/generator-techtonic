/**
 * @file Add Redux store to application
 * @description Features:
 * - Enhanced getState that accepts path parameter
 * - "dispatch logging" middleware
 * - Basic reducer showcasing how to leverage lodash for updating state
 * @module plugins/redux.state
 * @example <caption>Extend application object</caption>
 * var state = require('./plugins/redux.state');
 * var app = new Marionette.Application();
 * module.exports = Object.assign(app, state);
 * @example <caption>Enhanced getState accepts path parameter</caption>
 * app.getState();// {name: 'omaha-project', count: 42}
 * app.getState('count');// 42
 * @example <caption>Update state with Redux API</caption>
 * app.getState('count');// 42
 * app.dispatch('INCREMENT');
 * app.getState('count');// 43
**/
define(function(require, exports, module) {
    'use strict';

    var {get, update} = require('lodash');
    var {applyMiddleware, compose, createStore} = require('redux');

    var initialState = {
        name: 'omaha-project',
        count: 42
    };

    module.exports = createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(dispatchLogger),
            addGetStatePathParameter()
        )
    );

    // state reducer
    function reducer(state, action) {
        switch (action.type) {
            case 'INCREMENT':
                return update(state, 'count', increment);
            case 'DECREMENT':
                return update(state, 'count', decrement);
            default:
                return state;
        }
    }
    // middleware
    function dispatchLogger(store) {
        return (next) => {
            return (action) => {
                console.log('Dispatch: ' + action.type);
                return next(action);
            }
        }
    }
    // store enhancer
    function addGetStatePathParameter(store) {
        return (createStore) => {
            return (reducer, preloadedState, enhancer) => {
                const store = createStore(reducer, preloadedState, enhancer);
                let getState = (path) => {
                    if (typeof(path) === 'string') {
                        return get(store.getState(), path);
                    } else {
                        return store.getState();
                    }
                };
                let {dispatch, subscribe} = store;
                return {getState, dispatch, subscribe}
            }
        }
    }
    // pure functions
    function increment(val) {
        return val + 1;
    }
    function decrement(val) {
        return val - 1;
    }
});