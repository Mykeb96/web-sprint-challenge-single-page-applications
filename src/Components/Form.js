import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Pizzas from './Pizzas'
import * as yup from 'yup';
import styled from 'styled-components'

const BigContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: grey;
    width: 20%;
    border-radius: 8px;
    margin: auto;
    margin-top: 10%;
`;

const PlaceYourOrder = styled.h1`
    color: white;
    border: 2px solid black;
    border-radius: 8px;
    background: black;
    font-size: 1.7rem;
    margin-top: 1rem;
    padding: 1rem;
`;

const ReturnHome = styled.button`
color: white;
border: 2px solid black;
border-radius: 8px;
background: black;
font-size: 1rem;
margin-top: 1rem;
padding 0.5rem;
margin-bottom: 1rem;
`;

export default function Form(props) {

    // Defining Validation Schema

    let schema = yup.object().shape({
        name: yup.string().required('name must be at least 2 characters').min(2, 'name must be at least 2 characters'),
        size: yup.string().required('Pizza size is required'),
        topping1: yup.string(),
        topping2: yup.string(),
        topping3: yup.string(),
        topping4: yup.string(),
        special: yup.string()
    })

    // Defining intial state of Form data and Errors

    const initialFormData = {
        name: '',
        size: '',
        topping1: false,
        topping2: false,
        topping3: false,
        topping4: false,
        special: ''
    }

    const defaultErrors = {
        name: '',
        size: ''
    }

    // Declaring our slices of state
    const [formData, setFormData] = useState(initialFormData)
    const [errors, setErrors] = useState(defaultErrors)
    const [pizzas, setPizzas] = useState([])
    const [buttonDisable, setButtonDisable] = useState(true)

    //Keep our submit button disabled until form validations pass. 
    useEffect(() => {
        schema.isValid(formData).then(valid => setButtonDisable(!valid))
    }, [formData])



    // Function to navigate back to home page
    const history = useHistory()
    const routeToForm = () => {
        history.push('/')
    }

    // Helper function to validate schema
    const setValidationErrors = (name, value) => {
        yup
            .reach(schema, name)
            .validate(value)
            .then(() => setErrors({ ...errors, [name]: "" }))
            .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
    };

    // Handle change function, determines wehter an input is of type checkbox or not.
    // Updates and links our state to current changes being inputted, passes values into errors functions
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const trueValue = type === 'checkbox' ? checked : value;
        setValidationErrors(name, trueValue)
        setFormData({
            ...formData, [name]: trueValue
        })
    }

    // Handle submit function, prevents page reload on submit
    // Declares a new Pizza based on the current state of the data
    // Passes that data to the API as a POST request
    // Uses POST response to set the pizza state, clears form inputs
    const handleSubmit = (e) => {
        e.preventDefault()
        const newPizza = {
            name: formData.name.trim(),
            size: formData.size,
            topping1: formData.topping1,
            topping2: formData.topping2,
            topping3: formData.topping3,
            topping4: formData.topping4,
            special: formData.special
        }
        axios.post(`https://reqres.in/api/orders`, newPizza)
            .then(res => setPizzas([...pizzas, res.data]))
        setFormData(initialFormData)
    }


    return (
        <div>
            <BigContainer className="big-container">
            <PlaceYourOrder>Place your order!</PlaceYourOrder>
            <form id='pizza-form' onSubmit={handleSubmit}>
                <label> Name:
                    <input type="text" name='name' id='name-input' onChange={handleChange} value={formData.name} />
                </label>
                <div style={{ color: "red" }}>
                    <div>
                        {errors.name}</div>
                </div>
                <label > Pizza Size:
                    <select id='size-dropdown' name='size' onChange={handleChange} value={formData.size} >
                        <option value="">-- Choose Size --</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                        <option value="Jumbo">Jumbo</option>
                    </select>
                </label>
                <div style={{ color: "red" }}>
                    <div>{errors.size}</div>
                </div>

                <label > Pepperoni
                    <input type="checkbox" name='topping1' onChange={handleChange} value={formData.topping1} />
                </label>
                <br></br>
                <label > Italian Sausage
                    <input type="checkbox" name='topping2' onChange={handleChange} value={formData.topping2} />
                </label>
                <br></br>
                <label > Bacon
                    <input type="checkbox" name='topping3' onChange={handleChange} value={formData.topping3} />
                </label>
                <br></br>
                <label > Beef
                    <input type="checkbox" name='topping4' onChange={handleChange} value={formData.topping4} />
                </label>
                <br></br>
                <label >Special Instructions:
                    <input id='special-text' type="text" name='special' onChange={handleChange} value={formData.special} />
                </label>
                <br></br>
                <button name='submit' disabled={buttonDisable} id='order-button'> Complete Order</button>
            </form>
            <Pizzas pizzas={pizzas} />
            <ReturnHome onClick={routeToForm}>Return Home</ReturnHome>
            </BigContainer>
        </div>

    )
}