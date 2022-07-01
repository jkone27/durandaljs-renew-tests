import app from 'durandal/app';

const sayHello = function (name) {
    app.showMessage('Hello ' + name + '! Nice to meet you.', 'Greetings');
};

export default sayHello;
