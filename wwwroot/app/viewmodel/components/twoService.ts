import app from 'durandal/app';

const hello = function (name) {
    app.showMessage('Hello ' + name + '! Nice to meet you.', 'Greetings');
};

export default hello;
