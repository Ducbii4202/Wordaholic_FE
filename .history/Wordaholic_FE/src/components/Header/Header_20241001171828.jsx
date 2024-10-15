// import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";

const Header = () => {
  // const navigate = useNavigate();
  const { Header, Content, Footer, Sider } = Layout;
  const getItem = (label, key, icon, children) => {
    return {
      key,
      icon,
      children,
      label,
    };
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={"collapsed"}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={getItem}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "colorBgContainer",
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: "colorBgContainer",
              borderRadius: "borderRadiusLG",
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Header;
