import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'

const ProductViewOne = () => {
    const {id} = useParams()
    const [product, setProduct] = useState()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response=>setProduct(response.data))
            .catch(err=>console.log(err))
    })

    return (
        <fieldset>
            <legend> ViewOne.jsx</legend>
            {
                product&&
                <div>
                    <h3> Title: {product.title} </h3>
                    <h3> Price: {product.price} </h3>
                    <h3> Description: {product.description} </h3>
                </div>
            }
        </fieldset>
    )
}

export default ProductViewOne