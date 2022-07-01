import hello from './oneService';
import ko from 'knockout';

const one = {
    name: ko.observable(),
    sayHello: function () { hello(this.name()); }
};

export default one;