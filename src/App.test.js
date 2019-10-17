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
 }

 
