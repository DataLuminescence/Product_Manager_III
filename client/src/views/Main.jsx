import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductDisplay from '../components/ProductDisplay';
import axios from 'axios';

const Main = () => {

    const [products, setProducts] = useState([]);

    const [refresh, setRefresh] = useState(true);

    const reloadList = () => {
        setRefresh(!refresh)
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => console.error(err))
    }, [refresh]);

    return (
        <>
            <ProductForm reloadList = {reloadList}/>
            <ProductDisplay products = {products} reloadList = {reloadList}/>
        </>
    )
}

export default Main;