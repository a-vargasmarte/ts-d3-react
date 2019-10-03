import React from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

interface dropdownProps {
  genderSelected: any;
}

const GenderDropDown: React.FC<dropdownProps> = props => {
  let { genderSelected } = props;
  return (
    <Dropdown>
      <DropdownToggle variant="primary" id="dropdown-basic">
        Please select gender
      </DropdownToggle>

      <DropdownMenu>
        <DropdownItem onSelect={() => genderSelected("men")}>
          Men
        </DropdownItem>
        <DropdownItem onSelect={() => genderSelected("women")}>
          Women
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
export default GenderDropDown;
