import React from 'react';
import {create} from 'react-test-renderer';
import ChartWrapper from '../ChartWrapper';


describe("ChartWrapper component", () => {
    test("Component gets rendered", () => {
        const chartWrapper = create(<ChartWrapper />);
        expect(chartWrapper.toJSON()).toMatchSnapshot();
    })
})
  