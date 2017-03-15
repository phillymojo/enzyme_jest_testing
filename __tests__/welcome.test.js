import React from 'react';
import { shallow } from 'enzyme';
import Welcome from '../src/components/Welcome.js';

describe('Welcome (Snapshot)', () => {
    it('Welcome renders hello world', () => {
        const welcome = shallow(<Welcome />);
        expect(welcome.find('div').text()).toEqual('Hello World');
    });
});