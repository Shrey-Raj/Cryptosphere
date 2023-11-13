import React, { useState } from 'react';
import { Drawer, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const ResponsiveMenu = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      {/* Mobile Menu (Drawer) */}
      <div className="mobile-menu-icon" onClick={showDrawer}>
        <MenuOutlined />
      </div>

      <Drawer
        title="Menu"
        placement="left"
        onClose={onClose}
        open={visible}
        width={200}
        // styles.body={{ padding: 0 }}
      >
        {/* Your Drawer Content Here */}
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Services</Menu.Item>
          <Menu.Item key="4">Contact</Menu.Item>
        </Menu>
      </Drawer>

      {/* Desktop Menu */}
      {/* <div className="desktop-menu">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Services</Menu.Item>
          <Menu.Item key="4">Contact</Menu.Item>
        </Menu>
      </div> */}
    </div>
  );
};

export default ResponsiveMenu;
