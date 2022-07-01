import ko from 'knockout';
import sayHello from './oneService';

const one = {
    name: ko.observable(),
    sayHello: function () { sayHello(this.name()); }
};

export default one;