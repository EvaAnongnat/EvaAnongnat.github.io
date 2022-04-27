import React from "react";
import { DropdownContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from "./DropdownStyle";

const Dropdown = (props) => {
  let { isOpen, handleClose } = props;
  return (
    <DropdownContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={handleClose} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/">
            Profile
          </SidebarLink>
          <SidebarLink to="/">
            Activity
          </SidebarLink>
          <SidebarLink to="/activity_list">
            History
          </SidebarLink>
          <SidebarLink to="/">
            Settings
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;