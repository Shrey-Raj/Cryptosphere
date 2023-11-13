//follow this yt video for Making Line Chart : https://youtu.be/ueA1BGfqgyk

import React , {useEffect} from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import { Col, Row, Typography } from "antd";

// import coinHistory from "../../coinHistoryjson.json";

const LineChart = ({coinHistory, currentPrice, coinName,changePercent}) => {


    useEffect(()=>{
        console.log(coinHistory)
    },[coinHistory])

    const coinPrice = [];
    const coinTimestamp = [];
  
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
      coinPrice.push(coinHistory?.data?.history[i].price);
    }
  
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        const timestamp = coinHistory?.data?.history[i].timestamp;
        const date = new Date(timestamp * 1000).toLocaleDateString();
        const time = new Date(timestamp * 1000).toLocaleTimeString();
        coinTimestamp.push(`${date} ${time}`);
      }
      coinTimestamp.sort((a, b) => new Date(a) - new Date(b));


  const data = {
    labels:coinTimestamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      }
    ],
  };


  const options = {
    responsive: true,
    plugins: {
      legend: {
        display:true,
        position: 'top',
        align:'right'
      },
      title: {
        display: true,
        font:{size:25}
      },
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Typography.Title level={2} className="chart-title">
          {coinName} Price Chart
        </Typography.Title>
        <Col className="price-container">
          <Typography.Title level={5} className="price-change">
            Change: {changePercent} %
          </Typography.Title>
          <Typography.Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Typography.Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
