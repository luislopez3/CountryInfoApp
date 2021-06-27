import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import Regions from '../Regions.js';

describe("Show Details component", () => {
    test("Matches the snapshot", () => {
        const wrapper = create(
        <MemoryRouter ><Regions /></MemoryRouter>
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});