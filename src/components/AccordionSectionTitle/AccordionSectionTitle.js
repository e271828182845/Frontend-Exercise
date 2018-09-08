import Component from '../Component/Component';

class AccordionSectionTitle extends Component {
    init() {
        this.element.addEventListener('click', this.handleClick.bind(this));
    }

    handleClick(e) {
        this.handlers.onClickHandler(e);
    }

    updateView() {
        if (this.props.activeSection === this.element.id) {
            this.element.classList.add('is-open');
        } else {
            this.element.classList.remove('is-open');
        }
    }
}

export default AccordionSectionTitle;
