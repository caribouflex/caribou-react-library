import React from 'react';
import enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../src/components/button/Button';
import {expect} from 'chai';

enzyme.configure({ adapter: new Adapter() });

describe('<Button>', () => {

    const wrapper = shallow(<Button>Submit</Button>);

    it('Should output a button', () => {
        console.log(wrapper.name());
        expect(wrapper.name()).to.equal("button");
    });

    it('Should contain the good text', () => {
        expect(wrapper.contains("Submit")).to.equal(true);
    });

    it('Should have type=button by default', () => {
        expect(wrapper.find('button').prop('type')).to.equal("button");
    });

    it('Should show the type if passed one', () => {
        const wrapperSubmit = shallow(<Button type="submit">Submit</Button>);
        expect(wrapperSubmit.find('button').prop('type')).to.equal("submit");
    });

    it('Should call onClick callback', done => {
        mount(<Button onClick={() => done()}>Title</Button>).simulate('click');
    });

});

