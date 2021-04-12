import React from 'react';
import { connect } from 'dva';
import Employees from '../components/employees.jsx';

const Users = ({ dispatch, users }) => {
  function handleDelete(id) {
    dispatch({
      type: 'users/removeUser',
      payload: id,
    });
  }
  return (
    <div>
      <Employees onDelete={handleDelete} users={users} />
    </div>
  );
};

export default connect(({ users }) => ({
  users,
}))(Users);
