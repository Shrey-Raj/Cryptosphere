import React from 'react';
import { Table, Typography } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (name) => (
      <div className='exchanges-icon-name' style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={name.iconUrl}
          style={{ maxWidth: 20, minWidth: 20, marginRight: '1rem' }}
          alt={name.name}
        />
        <Typography.Title 
        level={3} 
        style={{ margin: '0', fontSize:'1rem' }}>
          <span className='exchanges-col-name'>{name.coinName}</span>
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
    responsive: ['sm'], // Hide for screen size below 600px
    onHeaderCell: (column) => {
      return {
        style: {
          // color:'red' 
        },
      };
    },
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
];

const CryptoAccordion = ({ data }) => (
  <Table
    columns={columns}
    dataSource={data}
    responsive={{ xs: 1, sm: 2, md: 4, lg: 4, xl: 5, xxl: 5 }}
  />
);

export default CryptoAccordion ;
//


// useEffect(()=>{
//   console.log('mkdmf') ; 
  
//   return ()=>{
//     // nklndlf 
//   }

// },[])

