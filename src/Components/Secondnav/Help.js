import { DownOutlined, QuestionCircleFilled } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
  {
    label: "Become a partner",
    key: '0',
  },
  {
    type: "divider",
  },
  {
    label: "Terms and Conditions",
    key: '1',
  },
  {
    type: "divider",
  },
  {
    label: 'Privacy Policy',
    key: '3',
  },
  {
    type: "divider",
  },
  {
    label: 'Customer Support',
    key: '4',
  },
  {
    type: "divider",
  },
  {
    label: 'Cancellation Policy',
    key: '5',
  },
];
const Help = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <items onClick={(e) => e.preventDefault()}>
      <Space>
        <QuestionCircleFilled />Help
        <DownOutlined />
      </Space>
    </items>
  </Dropdown>
);
export default Help;