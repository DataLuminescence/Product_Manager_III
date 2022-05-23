// Import dependencies
import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {

    // Sets title, price and description values to form data
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    // Set the errors to display to the user
    const [errors, setErrors] = useState([]);

    // Deconstruct to use prop data more easily
    const {reloadList} = props

    // Sends data collected from the form to the back end
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/products`, {
            title,
            price,
            description
        })
            //You would put navigate here
            .then(res => {
                console.log("Response: ", res)
                reloadList()
                clearForm()
            })
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

    // Clear default values for title, price, and description
    const clearForm = () =>{
        setTitle("")
        setPrice(0)
        setDescription("")
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
                <button style={{ width: 100 }}>Create</button>
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

export default ProductForm