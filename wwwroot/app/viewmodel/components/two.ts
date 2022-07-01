import sayHello from './twoService';
import ko from 'knockout';

// just because you can :P
interface ITwo {
    name: ko.Observable<string>,
    sayHello: () => void
}

const two = {
    name: ko.observable(''),
    sayHello: function () {
        sayHello(this.name());
    }
};

export default two;
