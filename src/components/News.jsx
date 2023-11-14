import React, { useEffect, useState } from "react";
import { Input, Typography, Row, Col, Card} from "antd";
import { LoadingCard } from "./components";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import AOS from 'aos' ;
import demoImage from "../images/news-icon.png"; // Import your demo image path
const { Text, Title } = Typography;
const { Search } = Input;

import cryptoNews from '../../jsondata.json' ; // for local use 

const News = ({ simplified }) => {
  // const {data : cryptoNews,isFetching}  = useGetCryptoNewsQuery();  // I have surpassed the free limit of the NewsAPI I was using i.e. 50 requests/month

  const [NewsData, setNewsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(()=>{
    AOS.init({duration:1000});
  })

  // console.log("cryptoNews",cryptoNews);

  useEffect(() => {
    let newsToDisplay = simplified ? 9 : cryptoNews?.news?.length;
    let filteredNewsData = cryptoNews?.news;

    if (searchTerm) {
      filteredNewsData = filteredNewsData?.filter(news =>
        news.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setNewsData(filteredNewsData?.slice(0, newsToDisplay));
  }, [cryptoNews, simplified, searchTerm]);


  // if(isFetching){
  //   return <LoadingCard></LoadingCard> ;
  // }

  return (
    <>
      <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Search
            placeholder="Search for news..."
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginBottom: '16px' , color:"--var(blue1)" }}
          />
          {
            (searchTerm) ? <Title level={4} style={{ marginBottom: '16px' , color:"var(--green-blue)"}}>
            Results for: "{searchTerm}"
          </Title> 
          : ''
          }   
        </Col>
      )}
        {NewsData?.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i} className="animation" data-aos="fade up">
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    {news.title}
                  </Title>
                  <img
                    src={news?.image || demoImage}
                    alt=""
                    style={{ maxWidth: "200px", minWidth: "100px" }}
                  />
                </div>
                <p>
                  {news.body.length > 100
                    ? `${news.body.substring(0, 100)}...`
                    : news.body}
                </p>
                <div className="provider-container">
                  <div>
                    <Text
                      className="provider-name"
                      style={{
                        color: "var(--green-blue)",
                        fontWeight: "100",
                      }}
                    >
                      {news.source}
                    </Text>
                  </div>
                  <Text>{news.date}</Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
