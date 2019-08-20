import React from 'react';
import { shallow } from 'enzyme';
import Incrementer from './Incrementer';

describe('Incrementer component', () => {
  it('renders Incrementer', () => {
    const wrapper = shallow(<Incrementer />);
    expect(wrapper).toMatchSnapshot();
  });

  it('the button works for to go up by one (increment)', () => {
    const wrapper = shallow(<Incrementer />);

    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.state('count')).toEqual(1);
  });
});
