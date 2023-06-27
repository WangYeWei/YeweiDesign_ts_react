import React from "react";
import KMenu from "../Menu";

const VerticalBaseMenu = () => {

  const { Item, SubMenu } = KMenu
  return (
    <KMenu defaultSelected={['submenu-one', 'one-Three']} mode="vertical">
      <SubMenu title="Navigation One" itemKey="submenu-one" icon="cab">
        <Item itemKey="one-one">Sub-Menu Item One</Item>
        <Item itemKey="one-Two">Sub-Menu Item Two</Item>
        <Item itemKey="one-Three">Sub-Menu Item Three</Item>
        <Item itemKey="one-four">Sub-Menu Item Three</Item>
      </SubMenu>
      <SubMenu title="Navigation Two" itemKey="submenu-two" icon="coffee">
        <Item itemKey="two-one">Sub-Menu Item One</Item>
        <Item itemKey="two-Two">Sub-Menu Item Two</Item>
        <Item itemKey="two-Three">Sub-Menu Item Three</Item>
        <Item itemKey="two-four">Sub-Menu Item Three</Item>
      </SubMenu>
      <SubMenu title="Navigation Three" itemKey="submenu-three" icon="code-branch">
        <Item itemKey="three-one">Sub-Menu Item One</Item>
        <Item itemKey="three-Two">Sub-Menu Item Two</Item>
        <Item itemKey="three-Three">Sub-Menu Item Three</Item>
        <Item itemKey="three-four">Sub-Menu Item Three</Item>
      </SubMenu>
      <Item itemKey="menu-item-one" icon="broom">Menu Item</Item>
    </KMenu>
  )
}

export default VerticalBaseMenu