import React from 'react'

export default function Pizza(props) {
    const { name, size, special, topping1, topping2, topping3, topping4 } = props;
    const selectedToppings = [];

    if (topping1 === true){
        selectedToppings.push('Pepperoni')
    }

    if (topping2 === true){
        selectedToppings.push('Italian Sausage')
    }

    if (topping3 === true){
        selectedToppings.push('bacon')
    }

    if (topping4 === true){
        selectedToppings.push('Beef')
    }

    console.log(selectedToppings)


    return (
        <div>
            <h3>Customer: {name}</h3>
            <p>Size: {size}</p>
            {selectedToppings.map((topping) => 
            <li>
                {topping}
            </li>
            )
            }
            <p>{special ? `Special instructions: ${special}` : 'No Special Instructions'}</p>
        </div>
    )
}