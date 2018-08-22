// External Depedencies
import React from 'react'; 
import enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// Our Dependencies
import { expect } from '../../utils/chai';
// Our Component
import { Button } from './Button';

enzyme.configure({ adapter: new Adapter() });

describe('Button', () => {
    let wrapper;
    let wrapperSubmit;
    beforeEach(() => {
        wrapper = shallow(<Button>Auf wiedersehen</Button>);
        wrapperSubmit = shallow(<Button type="submit">Submit</Button>);
    });
    
    it('Should output a button', () => {
        console.log(wrapper.name());
        expect(wrapper.name()).to.equal("button");
    });

    it('Should contain the good text', () => {
        expect(wrapper.contains("Auf wiedersehen")).to.equal(true);
    });

    it('Should have type=button by default', () => {
        expect(wrapper.find('button').prop('type')).to.equal("button");
    });

    it('Should show the type if passed one', () => {
        expect(wrapperSubmit.find('button').prop('type')).to.equal("submit");
    });

    it('Should call onClick callback', done => {
        mount(<Button onClick={() => done()}>Title</Button>).simulate('click');
    });
});
