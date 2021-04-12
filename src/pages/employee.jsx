import { connect } from 'dva';
import Employee from '../components/employee.jsx';

const EmployeeWrapper = ({
  dispatch,
  users,
  match: {
    params: { key },
  },
}) => {
  let user = users.find((item) => item.key == key);
  function handleSave(user) {
    dispatch({
      type: 'users/saveUser',
      payload: user,
    });
  }
  return (
    <div>
      <Employee onSave={handleSave} user={user} />
    </div>
  );
};

export default connect(({ users }) => ({
  users,
}))(EmployeeWrapper);
