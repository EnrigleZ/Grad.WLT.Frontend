import React from 'react';
import { Form, Row, Col, Input, Button } from 'antd';
import './App.css';
import 'antd/dist/antd.css'

import ItemAreaComp from './item-area';
import { GetTopItems, GetRecommendItems } from './api';

function App() {
  const [items, setItems] = React.useState([]);
  const [recommendations, setRecommendations] = React.useState([]);
  const [uid, setUid] = React.useState('');

  React.useEffect(() => {
    GetTopItems().then(res => {
      setItems(res.data)
    })
  }, []);

  const onRecommend = React.useCallback(() => {
    GetRecommendItems(uid).then(res => {
      setRecommendations(res.data);
    })
  }, [uid])

  // console.log(items);
  // console.log(recommendations);

  return (
    <div className="App">
      <Row>
        <Col span={8}>
          <ItemAreaComp title="热门商品" items={items} />
        </Col>
        <Col span={8}>
          <ItemAreaComp title="猜你喜欢" items={recommendations} />
        </Col>
        <Col span={8}>
          <Form>
            <Form.Item label="User ID">
              <Input value={uid} onChange={e => {
                setUid(e.target.value);
              }}/>
            </Form.Item>
            <Form.Item>
              <Button type='primary' onClick={onRecommend}>Get</Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default App;
