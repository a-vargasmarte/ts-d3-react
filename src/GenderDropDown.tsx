import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

interface dropdownProps {
  genderSelected: any;
}

const GenderDropDown: React.FC<dropdownProps> = props => {
  let { genderSelected } = props;
  return (
    <Dropdown data-test="component-dropdown">
      <Dropdown.Toggle
        variant="primary"
        id="dropdown-basic"
        data-test="dropdown-toggle"
      >
        Please select gender
      </Dropdown.Toggle>

      <Dropdown.Menu data-test="dropdown-menu">
        <Dropdown.Item
          onSelect={() => genderSelected("men")}
          data-test="dropdown-item-men"
        >
          Men
        </Dropdown.Item>
        <Dropdown.Item
          onSelect={() => genderSelected("women")}
          data-test="dropdown-item-women"
        >
          Women
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default GenderDropDown;
