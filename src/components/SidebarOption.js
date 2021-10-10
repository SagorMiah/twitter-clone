import React from "react";

const SidebarOption = ({ active, Icon, Text }) => {
  return (
    <div className={`sidebarOption ${active && "sidebarOption__active"}`}>
      <Icon />
      <h3>{Text}</h3>
    </div>
  );
};

export default SidebarOption;
