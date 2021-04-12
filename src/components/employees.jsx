import './employees.css';
import { Table, Tag, Space, Button } from 'antd';
const { Column, ColumnGroup } = Table;
import PropTypes from 'prop-types';
import { Link } from 'umi';

const Users = ({ onDelete, users }) => {
  return (
    <div>
      <h1 className="users-header">
        <span>用户列表</span>
        <Button type="primary">
          <Link to="/employee">添加</Link>
        </Button>
      </h1>

      <Table dataSource={users}>
        <ColumnGroup title="Name">
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup>
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
            <>
              {tags.map((tag) => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(text, record, index) => (
            <Space size="middle">
              <Link to={'/employee/' + record.key}>edit {record.lastName}</Link>
              <a onClick={() => onDelete(record.key)}>Delete</a>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

Users.propTypes = {
  onDelete: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

export default Users;
