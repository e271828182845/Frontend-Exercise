import App from './components/App/App';

(function (w) {
    w.document.addEventListener('DOMContentLoaded', function () {
        initApp();
    });

    function initApp() {
        const appNode = document.querySelectorAll('[data-js-component=App]')[0];
        const app = new App(appNode);

        app.init();
    }

}(window));
