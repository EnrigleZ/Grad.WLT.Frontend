import React from 'react';

const ItemComp = (props) => {
    const { id, highlight } = props;

    return (<div className={'item ' + (highlight ? 'highlight' : '')} key={id}>
        {id}
    </div>)
}

export default ItemComp
