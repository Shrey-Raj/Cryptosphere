import React from "react";
import { Link, Route , Routes } from "react-router-dom";
import { Layout , Space } from "antd";

import {
  Navbar,
  Exchanges,
  HomePage,
  Cryptocurrencies,
  News,
  CryptoDetails,CryptoAccordian
} from "./components/components.js";

import TestMenu from './components/TestMenu.jsx'

import Typography from "antd/es/typography/Typography.js";

import LoadingCard from './components/LoadingCard.jsx'
import LineChart from "./components/LineChart.jsx";
// import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route exact path="/exchanges" element={<Exchanges/>}/>
                <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
                <Route exact path="/crypto/:coinId" element={<CryptoDetails/>}/>
                <Route exact path="/news" element={<News/>}/>
                <Route exact path="/menu" element={<TestMenu/>}/>
              </Routes>
            </div>
          </Layout>
          <div className="footer">
          <Typography.Title level={5} style={{color:"white" , textAlign:"center"}}>
          Cryptoverse<br/>
          All right reserved .
          </Typography.Title>
          <Space>
            <Link to="./">Home</Link>
            <Link to="./exchanges">Exchanges</Link>
            <Link to="./news">News</Link>
          </Space>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default App;
