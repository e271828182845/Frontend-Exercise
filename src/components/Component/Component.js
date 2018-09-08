import cloneDeep from 'lodash.clonedeep';

class Component {
    constructor(element, props = null, handlers = null) {
        this.element = element;
        this._props = cloneDeep(props);
        this._handlers = handlers;

        this._state = null;
        this._children = null;
    }

    init() {}

    get props() {
        return this._props;
    }

    get handlers() {
        return this._handlers;
    }

    get children() {
        return this._children;
    }

    set children(children) {
        this._children = children;
    }

    get state() {
        return this._state;
    }

    set state(newState) {
        this._state = Object.assign({}, this._state, newState);

        this.updateView();
        this.updateChildren();

        return this._state;
    }

    updateChildren() {
        if (this._children && this._children.length > 0) {
            this._children.forEach(child => {
                child.onChanges(this._state);
            });
        }
    }

    onChanges(changes) {
        if (!this.props) {
            return;
        }

        Object.keys(this.props).forEach(prop => {
            if (this.props.hasOwnProperty(prop) && changes[prop] !== this.props[prop]) {
                this._props[prop] = cloneDeep(changes[prop]);
            }
        });

        this.updateView();
    }

    updateView() {}
}

export default Component;
