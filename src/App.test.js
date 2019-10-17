import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";
import GenderDropDown from "./GenderDropDown";

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

/**
 * Factory function to create a ShallowWrapper for GenderDropDown component
 * @function setupGenderDropDown
 * @param {object} props - Component props specific for this setup
 * @param {object} state - Initial state for setup
 * @returns {ShallowWrapper}
 *
 */

const setupGenderDropDown = (props = {}, state = null) => {
  const wrapper = shallow(<GenderDropDown {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value for GenderDropDown
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} val - value of data-test attribute for search
 * @returns {ShallowWrapper}
 */

test("renders bootstrap Dropdown component", () => {
  const wrapper = setupGenderDropDown();
  const appComponent = findByTestAttr(wrapper, "component-dropdown");
  expect(appComponent.length).toBe(1);
});

test("renders bootstrap Dropdown.Toggle component", () => {
  const wrapper = setupGenderDropDown();
  const appComponent = findByTestAttr(wrapper, "dropdown-toggle");
  expect(appComponent.length).toBe(1);
});

test("renders bootstrap Dropdown.Menu component", () => {
  const wrapper = setupGenderDropDown();
  const appComponent = findByTestAttr(wrapper, "dropdown-menu");
  expect(appComponent.length).toBe(1);
});

test("bootstrap Dropdown.Item component for men has the correct label", () => {
  const wrapper = setupGenderDropDown();
  const appComponent = findByTestAttr(wrapper, "dropdown-item-men");
  expect(appComponent.text()).toContain("Men");
});

test("bootstrap Dropdown.Item component for women has the correct label", () => {
  const wrapper = setupGenderDropDown();
  const appComponent = findByTestAttr(wrapper, "dropdown-item-women");
  expect(appComponent.text()).toContain("Women");
});

test("selecting the women item will change the state gender to women", () => {
  const gender = "men";
  const wrapper = setup(null, { gender });
  const genderWrapper = setupGenderDropDown();
  const womenItem = findByTestAttr(genderWrapper, "dropdown-item-women");
  // take item and simulate selecting it
  // womenItem.prop("onSelect")();
  console.log(womenItem.prop('onSelect')());
  // find chart-wrapper and test the gender prop value
  const chartWrapper = findByTestAttr(wrapper, "chart-wrapper");
  expect(chartWrapper.props("gender")).to.equal("women");
});
