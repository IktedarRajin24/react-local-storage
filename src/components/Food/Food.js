import React from 'react';
import './Food.css'
import { addToLocalStorage, deleteFromLocalStorage, removeFromLocalStorage } from '../utilities/fakedb';

const Food = (props) => {
    const {name, price, _id} = props.food

    const addToCart = id =>{
        addToLocalStorage(id);
    }

    const removeFromCart = id =>{
        removeFromLocalStorage(id);
    }

    //const addItem = () => addToCart(_id)

    return (
        <div className='food'>
            <h2>Name: {name}</h2>
            <p>Price: ${price}</p>
            <small>id: {_id}</small> <br /> <br />
            {/* <button onClick={addItem}>Add to cart</button> */}
            <button onClick={()=> addToCart(_id)}>Add to cart</button> &nbsp;
            <button onClick={() => removeFromCart(_id)}>Remove</button>
            &nbsp;
            <button onClick={deleteFromLocalStorage}>Delete cart</button>
        </div>
    );
};

export default Food;