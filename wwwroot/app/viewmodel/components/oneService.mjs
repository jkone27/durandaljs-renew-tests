import app from 'durandal/app';

/**
 * Say Hello function
 * @param {string} name - The name to say hello to.
 */
const sayHello = function (name) {
    app.showMessage('Hello ' + name + '! Nice to meet you.', 'Greetings');
};

export default sayHello;