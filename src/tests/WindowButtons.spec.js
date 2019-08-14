import React from 'react';
import {shallow} from 'enzyme';
import WindowButtons from '../components/WindowButtons';


describe('WindowButtons', ()=>{
    it('should render properly', ()=>{
        const redFxn = jest.fn()
        const wrapper = shallow(<WindowButtons redBtnFxn={redFxn}/>)
        describe('Has 1 div.windowButtonDiv', ()=>{
            expect(wrapper.find('div.windowButtonDiv')).toHaveLength(1);
        })
        expect(wrapper.find('button.windowButton').at(0).prop('style')).toEqual({"backgroundColor": "red"})
        expect(wrapper.find('button.windowButton').at(0).prop('onClick')).toEqual(redFxn)
        wrapper.find('button.windowButton').at(0).prop('onClick')();
        expect(redFxn).toHaveBeenCalled();
        jest.clearAllMocks()
    })
})