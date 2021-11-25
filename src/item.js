import React from 'react';

const ItemComp = (props) => {
    const { id } = props;

    return (<div key={id}>
        {id}
    </div>)
}

export default ItemComp
