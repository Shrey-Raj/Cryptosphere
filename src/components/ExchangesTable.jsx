import React, { useState } from "react";
import millify from "millify";
import CryptoAccordian from './CryptoAccordian.jsx';
import { Spin, Input } from 'antd';

import { useGetCryptoExchangesQuery } from "../services/cryptoApi";

const ExchangesTable = ({ uuid, cryptoName }) => {
  const { data: cryptoExchange, isFetching } = useGetCryptoExchangesQuery(uuid);
  const [searchTerm, setSearchTerm] = useState('');
  
  if (isFetching) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <Spin size="large" />
      </div>
    );
  }

  const TableData = cryptoExchange?.data?.exchanges.map((item, index) => ({
    key: `${uuid}-${index}`,
    name: { coinName: `${item.name}`, iconUrl: `${item.iconUrl}` },
    volume: millify(item["24hVolume"]),
    markets: millify(item.numberOfMarkets),
    btcPrice: item.btcPrice,
    price: millify(item.price),
  }));

  const filteredData = TableData.filter(item =>
    item.name.coinName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {TableData && (
        <div style={{marginBottom:"1rem"}}>
          <Input
            placeholder={`Search crypto exchanges for ${cryptoName}`}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <CryptoAccordian data={filteredData} />
    </>
  );
};

export default ExchangesTable;

