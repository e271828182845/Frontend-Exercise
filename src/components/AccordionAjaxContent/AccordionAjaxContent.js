import Component from '../Component/Component';

class AccordionAjaxContent extends Component {
    init() {
        let url = this.getURLFromAttr(this.element.attributes);

        fetch(url)
            .then(response => response.text())
            .then(content => {
                this.state = {
                    body: content
                };
            });
    }

    getURLFromAttr(attrs) {
        const attrName = 'data-js-url';

        if (attrs.length > 0 && attrs[attrName]) {
            return attrs[attrName].value;
        }
    }

    updateView() {
        this.element.innerHTML = this.state.body;
    }
}

export default AccordionAjaxContent;
