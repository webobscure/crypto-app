import React from 'react';
import 'millify';
import { Link } from 'react-router-dom';
import { Typography, Row, Col, Statistic } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';

const { Title } = Typography;

const HomePage = () => {

  const { data, isFetching} = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  console.log(data);

  if (isFetching) return 'Loading...';
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={globalStats} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={globalStats} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={globalStats} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={globalStats} />
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
