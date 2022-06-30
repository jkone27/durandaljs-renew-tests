define(function (require) {
    var router = require('plugins/router');

    var routes = [
        { route: '', title: 'Home', moduleId: 'viewmodel/components/home', nav: true },
        { route: 'one', title: 'One', moduleId: 'viewmodel/components/one', nav: true },
        { route: 'two', title: 'Two', moduleId: 'viewmodel/components/two', nav: true }
    ];

    var activator = function () {
        router.map(routes).buildNavigationModel();
        return router.activate();
    };

    return {
        router: router,
        activate: activator
    };
});