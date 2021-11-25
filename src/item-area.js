import React from 'react';
import { Card } from 'antd';
import ItemComp from './item';

const ItemAreaComp = (props) => {
    const { items, title } = props;

    return (
        <Card title={title} className="item-card">
          <div className="item-area">
            { items.map(id => (<ItemComp key={id} id={id} />)) }
          </div>
        </Card>
    )
}

export default ItemAreaComp;
