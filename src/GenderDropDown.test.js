import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import GenderDropDown from "./GenderDropDown";

// configure adapter property of Enzyme
Enzyme.configure({ adapter: new EnzymeAdapter() });

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
 *
 */

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

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
