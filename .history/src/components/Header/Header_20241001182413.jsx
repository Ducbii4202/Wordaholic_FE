import { useState } from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom"; // Thêm useNavigate từ react-router-dom

const { Header, Content, Footer, Sider } = Layout;

const getItem = (label, key, icon, children) => ({
  key,
  icon,
  children,
  label,
});

const items = [
  getItem("Home", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const HeaderPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

  const handleMenuClick = (e) => {
    if (e.key === "login") {
      navigate("/login"); // Điều hướng tới trang Login
    } else if (e.key === "register") {
      navigate("/register"); // Điều hướng tới trang Register
    }
  };

  return (
    <Layout className="min-h-screen">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={handleMenuClick} // Thêm sự kiện onClick để xử lý điều hướng
        />
      </Sider>
      <Layout>
        <Header className="p-0 bg-white shadow-md" />
        <Content className="m-4">
          <Breadcrumb className="m-4">
            <Breadcrumb.Item>
              <span onClick={() => navigate("/register")}>Register</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <span onClick={() => navigate("/login")}>Login</span>
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="p-6 min-h-[360px] bg-white rounded-md shadow-sm">
            Bill is a cat.
          </div>
        </Content>
        <Footer className="text-center">
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default HeaderPage;
