import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

// configure adapter property of Enzyme
Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for App component
 * @function setup
 * @param {object} props - Component props specific for this setup
 * @param {object} state - Initial state for setup
 * @returns {ShallowWrapper}
 *
 */

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} val - value of data-test attribute for search
 * @returns {ShallowWrapper}
 */

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders GenderDropDown component", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-gender-dropdown");
  expect(appComponent.length).toBe(1);
});

test("renders ChartWrapper component", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "chart-wrapper");
  expect(appComponent.length).toBe(1);
});

test("gender state starts at men", () => {
  const wrapper = setup();
  const initalGenderState = wrapper.state("gender");
  expect(initalGenderState).toBe("men");
});
