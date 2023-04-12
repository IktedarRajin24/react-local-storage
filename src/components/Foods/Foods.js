import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Foods.css';
import { getTotal } from '../utilities/fakedb';

const Foods = () => {

    const [foods, setFoods] = useState([]);

    useEffect( ()=> {
        fetch('generated.json')
        .then(response => response.json())
        .then(data => setFoods(data))
    } ,[])

    const total = getTotal(foods);

    // const foods = [
    //     {id: 1, name: 'burger', price: 300},
    //     {id: 2, name: 'pizza', price: 600},
    //     {id: 3, name: 'pasta', price: 400},
    //     {id: 4, name: 'sandwich', price: 200},
    //     {id: 5, name: 'pudding', price: 100},
    // ]
    return (
        <div>
            <h1>Food shop</h1>
            <p>total ${total}</p>
            <div className='foods'>
            
            {
                foods.map(food => <Food
                    key={food._id}
                    food={food}
                ></Food>)
            }
            
            </div>
        </div>
    );
};

export default Foods;