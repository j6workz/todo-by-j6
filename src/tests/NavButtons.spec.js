import React from 'react';
import {shallow, mount} from 'enzyme';
import NavButtons, {NavButton} from '../components/NavButtons';
import sinon from 'sinon';

const props = {
    isActive : "ALL",
    onClickFxn : jest.fn(()=>"PENDING")
}

describe('NavButtons', ()=>{
    it('it renders', ()=>{
        const wrapper = mount(<NavButtons />);
        expect(wrapper.find(NavButton)).toHaveLength(3);
        wrapper.unmount()
    })
})

describe('NavButtons', ()=>{
    it('checking what happens', ()=>{
        const wrapper = mount(<NavButtons isActive={props.isActive} clickFxn={props.onClickFxn}/>);
        // expect(wrapper.find(NavButton)).toHaveLength(3);
        expect(wrapper.find(NavButton).at(0).props()).toHaveProperty('isClicked', true);
        expect(wrapper.find('button.NavButton.active')).toHaveLength(1);
        expect(wrapper.find('button.NavButton').not('.active')).toHaveLength(2);
        expect(wrapper.find('button.NavButton').not('.active').at(0)).toHaveLength(1);
        wrapper.find('button.NavButton').not('.active').at(0).simulate('click')
        // props.onClickFxn()
        expect(props.onClickFxn).toHaveReturnedWith("PENDING");
        wrapper.unmount()
    })
})

describe('NavButton', ()=>{
    it('it renders as per props', ()=>{
        const wrapper = shallow(<NavButtons isActive="ALL" />);
        expect(wrapper.find({isClicked:true})).toHaveLength(1);
        expect(wrapper.find({isClicked:false})).toHaveLength(2);
    })
})