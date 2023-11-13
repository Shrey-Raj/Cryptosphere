import React from 'react';
import { Table, Typography } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (name) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={name.iconUrl}
          style={{ maxWidth: 20, minWidth: 20, marginRight: '1rem' }}
          alt={name.name}
        />
        <Typography.Title level={5} style={{ margin: '0' }}>
          {name.coinName}
        </Typography.Title>
      </div>
    ),
  },
  {
    title: '24hVolume',
    dataIndex: 'volume',
    key: 'volume',
  },
  {
    title: 'Markets',
    dataIndex: 'markets',
    key: 'markets',
  },
  {
    title: 'BTC Price',
    dataIndex: 'btcPrice',
    key: 'btcPrice',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
];

const CryptoAccordian = ({ data }) => (
  <Table
    columns={columns}
    dataSource={data}
    responsive={{ xs: 1, sm: 2, md: 4, lg: 4, xl: 5, xxl: 5 }}
  />
);

export default CryptoAccordian;

