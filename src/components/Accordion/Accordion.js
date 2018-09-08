import Component from '../Component/Component';

import AccordionSectionTitle from '../AccordionSectionTitle/AccordionSectionTitle';
import AccordionAjaxContent from '../AccordionAjaxContent/AccordionAjaxContent';

import './Accordion.scss';

class Accordion extends Component {
    constructor(element) {
        super(element);

        this.state = {
            activeSection: null
        };
    }

    init() {
        const sections = Array.from(this.element.querySelectorAll('[data-js-component=AccordionSectionTitle]'));
        const ajaxSectionNodes = Array.from(this.element.querySelectorAll('[data-js-component=AccordionAjaxContent]'));

        this.children = [
            ...sections.map(sectionNode => new AccordionSectionTitle(
                sectionNode,
                {activeSection: this.state.activeSection},
                {onClickHandler: this.handleClick.bind(this)}
            )),
            ...ajaxSectionNodes.map(sectionNode => new AccordionAjaxContent(sectionNode))
        ];

        this.children.forEach(child => {
            child.init();
        });
    }

    handleClick(e) {
        this.state = {
            activeSection: e.target.id
        };
    }
}

export default Accordion;
