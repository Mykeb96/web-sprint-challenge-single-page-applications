  
import React from 'react'
import Pizza from './Pizza.js'
import styled from 'styled-components'


const PastOrders = styled.h1`
    color: white;
    border: 2px solid black;
    border-radius: 8px;
    background: black;
    font-size: 1.7rem;
    margin-top: 1rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
`;


export default function Pizzas(props) {
    const { pizzas } = props;

    return (
        <div>
            <PastOrders>Past Orders</PastOrders>
            {
                pizzas.map(pizza => <Pizza key={pizza.id} name={pizza.name} size={pizza.size}
                    special={pizza.special} topping1={pizza.topping1} topping2={pizza.topping2}
                    topping3={pizza.topping3} topping4={pizza.topping4}
                />)
            }
        </div>
    )
}
