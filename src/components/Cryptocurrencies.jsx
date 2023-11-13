import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Row, Col, Input, Card , Spin } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import AOS from 'aos';

const Crytocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);

  const [cryptos, setCryptos] = useState([]);
  const [SearchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (cryptosList) {
      const filteredData = cryptosList?.data?.coins.filter((coin) =>
        coin.name.toLowerCase().includes(SearchTerm.toLowerCase())
      );
      setCryptos(filteredData);
      // console.log("filtereddata: " , filteredData);  
    }
  }, [cryptosList, SearchTerm]);

  useEffect(()=>{
    AOS.init({duration:1000})
  })

  if (isFetching) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <>
      {!simplified && (
        <div className="search-cry">
          <Input
            placeholder="Search crypto currency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            key={currency.uuid}
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card animation"
            data-aos="fade up"
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                className="crypto-card-card"
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={`${currency.iconUrl}`} />}
                hoverable
              >
                <p>Price: {millify(currency.price)} USD</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Crytocurrencies;
