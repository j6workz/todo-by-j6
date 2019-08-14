import React from 'react';
import {shallow} from 'enzyme'
import PopOver from '../containers/PopOver'
import ThreeDivContainer from '../containers/ThreeDivContainer';
import WindowButtons from '../components/WindowButtons';
import TitleFlexBox from '../components/TitleFlexBox';

const redBtnFxn = jest.fn()

describe('PopOver Component Test', ()=>{
    it('should have ThreeDivContainer', ()=>{
        const wrapper=shallow(<PopOver redBtnFxn={redBtnFxn}/>);
        expect(wrapper.find('div.PopOver')).toHaveLength(1);
        expect(wrapper.contains(<div className="PopOver">
            <ThreeDivContainer>
                <WindowButtons redBtnFxn={redBtnFxn}/>
                <TitleFlexBox title="Add New Todo" style={{color:"white"}}/>
            </ThreeDivContainer>
        </div>)).toBe(true)
    })
})