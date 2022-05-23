// Import dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ProductUpdateOne = () => {

    // Get data to set form prepopulated data
    const {id} = useParams()

    // Used to update title price and description if user updates forms
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    // used to redirect to the home page
    const navigate = useNavigate();

    // Set the errors to display to the user
    const [errors, setErrors] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response=>{
                const product = response.data
                setTitle(product.title)
                setPrice(product.price)
                setDescription(product.description)
            })
            .catch(err=>console.log(err))
    },[id])

    const onSubmitHandler = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/${id}`, {           
            title,
            price,
            description})
            .then(response => 
                navigate(`/`)
            )
            .catch(err => {
                const errArr = []
                const errResults = err.response.data.errors
                console.log(errResults)
                for (const key in errResults) {
                    errArr.push(errResults[key]["message"])
                }
                setErrors(errArr)
        })
    }

    // Forms to create new product with title, price and description as data
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <h1> Product Manager </h1>
                <p>
                    <label> Title </label>
                    <input type="text" name="title" value={title}
                    onChange={e => setTitle(e.target.value)}></input>
                </p>
                <p>
                    <label> Price </label>
                    <input type="number" name="price" value={price}
                    onChange={e => setPrice(e.target.value)}></input>
                </p>
                <p>
                    <label> Description </label>
                    <input type="text" name="description" value={description}
                    onChange={e => setDescription(e.target.value)}></input>
                </p>
                <button style={{ width: 100 }}>Update Product</button>
            </form>
            {
                // Loop through errors to provide user with messages on how to correct errors in forms
                errors.map((err, i) => (
                    <p key={i} style={{ color: "red" }}> {err} </p>
                ))
            }
        </div>
    )
}

export default ProductUpdateOne