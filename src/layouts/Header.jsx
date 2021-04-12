import { Menu } from 'antd';
import { Link } from 'umi';
import { HomeOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';

function Header({ location }) {
  return (
    <Menu selectedKeys={[location.pathname]} mode="horizontal" theme="dark">
      <Menu.Item key="/">
        <Link to="/">
          <HomeOutlined />
          Home
        </Link>
      </Menu.Item>
      <Menu.Item key="/list">
        <Link to="/list">
          <TeamOutlined />
          列表
        </Link>
      </Menu.Item>
      <Menu.Item key="/employee">
        <Link to="/employee">
          <UserOutlined />
          明细
        </Link>
      </Menu.Item>
    </Menu>
  );
}

export default Header;
