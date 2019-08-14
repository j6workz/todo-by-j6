import React from 'react';
import {shallow} from 'enzyme';
import FullModal from '../containers/FullModal';

const wrapper = shallow(<FullModal isModalOpen={true}/>);

describe('FullModal', ()=>{
    it('changes classNames as per props', ()=>{
        expect(wrapper.contains(<div className="FullModal"></div>)).toBe(true)
    })
})

describe('FullModal', ()=>{
    it('changes classNames as per props', ()=>{
        expect(wrapper.contains(<div className="CloseModal"/>)).toBe(false)
    })
})