import app from 'durandal/app';
import ko from 'knockout';

// just because you can :P
interface ITwo {
    name: ko.Observable<string>,
    sayHello: () => void
}

let two = {
    name: ko.observable(''),
    sayHello: function () {
        app.showMessage('Hello ' + this.name() + '! Nice to meet you.', 'Greetings');
    }
};

export default two;
