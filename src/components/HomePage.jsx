import React, { useEffect } from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Cryptocurrencies, News,LoadingCard } from "./components";
import AOS from 'aos' ;


// so that we dont need to use <Typography.Title> again and again
const { Title } = Typography;
const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  useEffect(()=>{
    AOS.init({
      duration:1000
    })
  })

  if (isFetching) return (<LoadingCard/>);

  return (
    <>
      <Title level={2} className="heading" style={{color:"var(--deep-blue)"}}>
        Global Crypto Stats
      </Title>
      <Row gutter={[32, 32]}>

        <Col span={12}>
          <Statistic
            className="stats-heading"
            title={
            <span style={{ color: "var(--green-blue)" }}>Total Cryptocurrencies</span>
            }
            value={millify(globalStats?.total)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title={<span style={{color:"var(--green-blue)"}}>Total Exchanges</span>}
            value={millify(globalStats?.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title={<span style={{color:"var(--green-blue)"}}>Total Market Cap</span>}
            value={millify(globalStats?.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title={<span style={{color:"var(--green-blue)"}}>Total 24h Volume</span>}
            value={millify(globalStats?.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic 
          title={<span style={{color:"var(--green-blue)"}}>Total Cryptocurrencies</span>}
          value={millify(globalStats?.total)} />
        </Col>
        <Col span={12}>
          <Statistic
          title={<span style={{color:"var(--green-blue)"}}>Total Markets</span>}
            value={millify(globalStats?.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title" style={{color:"var(--deep-blue)"}}>
          Top 10 Cryptos In The World
        </Title>
        
        <Title level={3} className="show-more" >
          <Link to="/cryptocurrencies" style={{color: "blue",fontSize:"1rem"}}>
          Show more</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3}>
          <Link to="/news" style={{color: "blue",fontSize:"1rem"}}>
          Show more</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default HomePage;
