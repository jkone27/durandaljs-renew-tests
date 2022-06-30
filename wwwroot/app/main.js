requirejs.config({
    paths: {
        'text': 'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min',
        'durandal':'https://cdn.jsdelivr.net/npm/durandal@2.2.0/js',
        'plugins' : 'https://cdn.jsdelivr.net/npm/durandal@2.2.0/js/plugins',
        'transitions' : 'https://cdn.jsdelivr.net/npm/durandal@2.2.0/js/transitions',
        'knockout': 'http://ajax.aspnetcdn.com/ajax/knockout/knockout-3.5.0',
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.1/jquery.min',
        } 
});

requirejs.onError = function (err) {
    console.log(err.requireType);
    if (err.requireType === 'timeout') {
        console.log('modules: ' + err.requireModules);
    }

    throw err;
};

define(function (require) {
    var system = require('durandal/system');
    var app = require('durandal/app');

    

    system.debug(true);

    app.title = 'Durandal Starter Kit';

    app.configurePlugins({
        router: true,
        dialog: true
    });

    app.start().then(function() {
        app.setRoot('viewmodel/shell', 'entrance', 'applicationHost');
    });
});