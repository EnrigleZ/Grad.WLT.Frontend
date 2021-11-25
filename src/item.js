import React from 'react';

const ItemComp = (props) => {
    const { id, highlight } = props;

    return (<div className={highlight ? 'highlight' : ''} key={id}>
        {id}
    </div>)
}

export default ItemComp
