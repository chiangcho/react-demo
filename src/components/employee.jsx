import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const EmployeePage = ({ onSave, user }) => {
  const [form] = Form.useForm();
  form.setFieldsValue(user);
  const onFinish = (values) => {
    onSave({ ...user, ...values });
  };
  return (
    <div style={{ marginTop: '30px' }}>
      <Form {...layout} name="basic" form={form} onFinish={onFinish}>
        <Form.Item
          label="firstName"
          name="firstName"
          rules={[{ required: true, message: 'Please input your firstName!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="lastName"
          name="lastName"
          rules={[{ required: true, message: 'Please input your lastName!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="age" name="age">
          <Input />
        </Form.Item>
        <Form.Item label="Address" name="address">
          <Input.TextArea autoSize={{ minRows: 3, maxRows: 5 }} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

EmployeePage.propTypes = {
  onSave: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default EmployeePage;
