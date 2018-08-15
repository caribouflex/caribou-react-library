import React from 'react'
import { mount } from 'enzyme';

import Button from '../src/components/Button/Button';

describe('<Button>', () => {
    it('Should output a button', () => {
        mount(<Button>Boby</Button>)
            .find('button')
            .should.have.length(1);
    });
    
    // it('Should have type=button by default', () => {
    //     mount(<Button>Title</Button>)
    //         .find('button')
    //         .getDOMNode()
    //         .getAttribute('type')
    //         .should.equal('button');
    // });

    it('Should show the type if passed one', () => {
        mount(<Button type="submit">Title</Button>)
            .find('button')
            .getDOMNode()
            .getAttribute('type')
            .should.equal('submit');
    });

    it('Should call onClick callback', done => {
        mount(<Button onClick={() => done()}>Title</Button>).simulate('click');
    });

});

