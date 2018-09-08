import Component from './Component';
jest.mock('./Component');

it('Check Accordion instance creation', () => {
    const component = new Component();

    expect(Component).toHaveBeenCalledTimes(1);
});

