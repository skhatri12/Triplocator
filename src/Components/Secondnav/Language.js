import { DownOutlined, GlobalOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
  {
    label: "English",
    key: '0',
  }
];
const Language = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <items onClick={(e) => e.preventDefault()}>
      <Space>
        <GlobalOutlined />English<DownOutlined />
      </Space>
    </items>
  </Dropdown>
);

export default Language;