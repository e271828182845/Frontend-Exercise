import Accordion from './Accordion';

beforeEach(() => {
    document.body.innerHTML =
        '<dl class="Accordion" data-js-component="Accordion">' +
            '<dt id="1" class="Accordion-sectionTitle" data-js-component="AccordionSectionTitle">Section 1</dt>' +
            '<dd class="Accordion-sectionContent" ></dd>' +
        '</dl>'
    ;
});

it('Check init method is called', () => {
    const accordionNode = document.querySelectorAll('[data-js-component=Accordion]')[0];
    const accordion = new Accordion(accordionNode);
    const initSpy = jest.spyOn(accordion, 'init');

    accordion.init();

    expect(initSpy).toHaveBeenCalled();
});

it('Check init method sets the sections children', () => {
    const accordionNode = document.querySelectorAll('[data-js-component=Accordion]')[0];
    const accordion = new Accordion(accordionNode);
    const childrenSpy = jest.spyOn(accordion, 'children', 'get');

    accordion.init();

    const children = accordion.children;

    expect(childrenSpy).toHaveBeenCalled();
    expect(children.length).toBe(1);
});

it('Check state setting and getting correctly', () => {
    const accordionNode = document.querySelectorAll('[data-js-component=Accordion]')[0];
    const accordion = new Accordion(accordionNode);
    const stateSetSpy = jest.spyOn(accordion, 'state', 'set');
    const stateGetSpy = jest.spyOn(accordion, 'state', 'get');

    const stateExample = {
        activeSection: 99
    };

    accordion.init();

    accordion.state = stateExample;

    expect(stateSetSpy).toHaveBeenCalled();
    expect(accordion.state).toEqual(stateExample);
    expect(stateGetSpy).toHaveBeenCalled();
});


