import React from 'react';
import { Card } from 'antd';
import ItemComp from './item';

const ItemAreaComp = (props) => {
    const { items, title } = props;

    return (
        <Card title={title} className="item-card">
          <div className="item-area">
            { items.map(item => (<ItemComp key={item.id} id={item.id} highlight={item.highlight} />)) }
          </div>
        </Card>
    )
}

export default ItemAreaComp;
