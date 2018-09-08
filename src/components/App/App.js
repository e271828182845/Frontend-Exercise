import Component from '../Component/Component';
import Accordion from '../Accordion/Accordion';

import '../../styles/styles.scss';

import './App.scss';

class App extends Component {
    init() {
        const accordionNode = document.querySelectorAll('[data-js-component=Accordion]')[0];
        const accordion = new Accordion(accordionNode);

        this.children = [accordion];

        accordion.init();
    }
}

export default App;
