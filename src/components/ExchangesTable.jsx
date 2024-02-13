import React, { useState } from "react";
import millify from "millify";
import CryptoAccordian from './CryptoAccordian.jsx';
import { Spin, Input } from 'antd';

import { useGetCryptoExchangesQuery } from "../services/cryptoApi";

import coinsExchangeData from '../../coinsExchanges.json' ; 
import iconUrlsData from '../../iconUrlsData.json'; 
import defaultIcon from '../images/cryptocurrency.png';

const ExchangesTable = ({ uuid, cryptoName }) => {
  // const { data: cryptoExchange, isFetching } = useGetCryptoExchangesQuery(uuid);
  const [searchTerm, setSearchTerm] = useState('');
  
  var isFetching = false ;
  if (isFetching) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <Spin size="large" />
      </div>
    );
  }

  const iconsMap = iconUrlsData.reduce((acc, item) => {
    acc[item.uuid] = item.iconUrl;
    return acc;
  }, {});

  const coinData = coinsExchangeData.find((coin) => coin.uuid === uuid);

  // const TableData = cryptoExchange?.data?.exchanges.map((item, index) => ({
  const TableData = coinData?.data?.exchanges.map((item, index) => ({
    key: `${uuid}-${index}`,
    name: { coinName: `${item.name}`, iconUrl: iconsMap[item.uuid] || defaultIcon },
    volume: millify(item["24hVolume"]),
    markets: millify(item.numberOfMarkets),
    btcPrice: item.btcPrice,
    price: millify(item.price),
  }));

  // console.log('iconsMap' , iconsMap) ; 
  // console.log('coinData' , coinData) ; 
  // console.log('TableData' , TableData) ; 

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

