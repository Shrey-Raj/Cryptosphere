import React, { useState, useEffect } from "react";
import { Select, Typography } from "antd";
import {
  useGetCryptosQuery,
} from "../services/cryptoApi";
import { LoadingCard } from "./components.js";
import ExchangesTable from "./ExchangesTable.jsx";

const { Option } = Select;

const Exchanges = () => {
  const { data, isFetching } = useGetCryptosQuery(100);
  const fontSize = 18;
  const uuidBitcoin = "Qwsogvtv82FCd";

  const [selectedCrypto, setselectedCrypto] = useState(uuidBitcoin);
  const [selectedCryptoName, setselectedCryptoName] = useState("Bitcoin");

  var cryptos = [];
  if (!isFetching) {
    cryptos = data?.data?.coins;
    // console.log("cryptos");
  } else {
    return <LoadingCard></LoadingCard>;
  }

  const handleSelectChange = (value, option) => {
    if (option) {
      // alert(option.key);
      console.log(option.key);
      setselectedCrypto(option.key);
      setselectedCryptoName(option.value);
    }
  };

  return (
    <>
      <Select
        style={{ width: "100%", height: "5%" }}
        defaultValue="Bitcoin"
        onChange={handleSelectChange}
      >
        {cryptos.map((crypto) => (
          <Option
            key={crypto.uuid}
            value={crypto.name}
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src={crypto.iconUrl}
              style={{ maxWidth: 20, minWidth: 20, marginRight: "8px" }}
              alt={crypto.name}
            />
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <Typography.Title
                level={5}
                style={{ color: `${crypto.color}`, margin: "0" }}
              >
                {crypto.symbol}
              </Typography.Title>
              <Typography.Text style={{ margin: "0" }}>
                {crypto.name}
              </Typography.Text>
              <hr />
            </div>
          </Option>
        ))}
      </Select>

      {selectedCrypto && (
        <>
          <Typography.Title level={3} className="font-Raleway" style={{margin:"2rem"}}>
            Exchanges for {selectedCryptoName}
          </Typography.Title>
          <ExchangesTable uuid={selectedCrypto} cryptoName={selectedCryptoName}></ExchangesTable>
        </>
      )}
    </>
  );
};

export default Exchanges;
