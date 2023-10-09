import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
  {
    label: "USD",
    key: '0',
  },
  {
    label: "GBP",
    key: '1',
  },

  {
    label: 'AUD',
    key: '3',
  },
  {
    label: 'EUR',
    key: '4',
  },
];
const Currency = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <items onClick={(e) => e.preventDefault()}>
      <Space>
        $USD
        <DownOutlined />
      </Space>
    </items>
  </Dropdown>
);
export default Currency;