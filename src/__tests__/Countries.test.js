import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import Countries from '../Countries.js';

describe("Show Details component", () => {
    test("Matches the snapshot", () => {
        const wrapper = create(
        <MemoryRouter ><Countries /></MemoryRouter>
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});


