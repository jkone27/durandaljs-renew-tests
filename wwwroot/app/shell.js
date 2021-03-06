define(function (require) {
    var app = require('durandal/app');
    var ko = require('knockout');
    return {
        name: ko.observable(),
        sayHello: function () {
            app.showMessage('Hello ' + this.name() + '! Nice to meet you.', 'Greetings');
        }
    };
});