import { shallow} from "enzyme";
import React from 'react'
import Card from './Card'
import '../setupTest'

it('expect to render Card component', () => {
   expect(shallow(<Card />)).toMatchSnapshot()
})
