import React, { Component } from 'React';
import Todo from './Todo';
import {configure, shallow, mount} from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("<Todo /> component Unit test", () => {
    const mockFn = jest.fn();
    const props =  {
        onClick: mockFn,
        completed: false,
        text: 'buy milk'

    };
    
    let component ;
    beforeEach(() => {
    component = shallow(<Todo {...props} />);
    })
  it("Should render 1 <Todo /> component", () => {
    expect(component).toHaveLength(1);
    expect(component.find('li')).toHaveLength(1)
  });

  it("Should render props correctly", () => {
    expect(component.props().children).toEqual('buy milk');
  });

  it("Should set props correctly", () => {
    component.setProps({ text: 'hello'});
    expect(component.props().children).toEqual('hello');
  });

  it("Should call onClick handler when todo component ic clicked", () => {
    component.simulate('click')
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

describe("<Todo /> Styling behaviour", () => {
    const mockFn = jest.fn();
  it('should not have linethrough style when Todo is incomplete', ()=> {
    const component = shallow(<Todo onClick={mockFn} completed={false} text="go to shopping"/>)
    expect(component.props().style).toEqual({textDecoration : "none"})
  });

  it('should have linethrough style when Todo is complete', ()=> {
    const component = shallow(<Todo onClick={mockFn} completed={true} text="go to shopping"/>)
    expect(component.props().style).toEqual({textDecoration : "line-through"})
  });
});
