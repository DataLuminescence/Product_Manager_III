import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const ProductDisplay = (props) => {

    // handleDelete can go here
    const onDeleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(response => props.reloadList())
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th> Title </th>
                        <th> Price </th>
                        <th> Description </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.products && props.products.map((product, i) => (
                            <tr key={i}>
                                <td><Link to={"/product/view/" + product._id}>{product.title}</Link></td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td><Link to={`/product/update/`+ product._id}> Edit </Link></td>
                                <td><button onClick={() => onDeleteHandler(product._id)}> Delete </button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ProductDisplay;