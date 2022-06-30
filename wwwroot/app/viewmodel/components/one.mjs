import app from 'durandal/app';
import ko from 'knockout';

let one = {
    name: ko.observable(),
    sayHello: function () {
        app.showMessage('Hello ' + this.name() + '! Nice to meet you.', 'Greetings');
    }
};

export default one;
