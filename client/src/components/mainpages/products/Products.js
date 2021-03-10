import React, { useContext, useState, useEffect } from 'react'
import { GlobalState } from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
import Loading from '../utils/loading/Loading'
import axios from 'axios'



function Products() {
    const state = useContext(GlobalState)
    const [products, setProducts] = state.productsAPI.products;
    const [isLogged, setIsLogged] = state.userAPI.isLogged;
    const [isAdmin, setIsAdmin] = state.userAPI.isAdmin;
    const [token] = state.token
    const [callback, setCallback] = state.productsAPI.callback
    const [loading, setLoading] = useState(false)
    const [isCheck, setIsCheck] = useState(false)
    console.log(products)

    const handleCheck = (id) => {
        // console.log(id)
        products.forEach(product => {
            if (product._id === id) product.checked = !product.checked
        });
        setProducts([...products])
    }




    const deleteProduct = async (id, public_id) => {
        console.log(id, public_id)
        try {
            setLoading(true)
            const destroyImg = axios.post('/api/destroy', { public_id }, {
                headers: { Authentication: token }
            })
            const deleteProduct = axios.delete(`/api/products/${id}`, {
                headers: { Authentication: token }
            })
            await destroyImg
            await deleteProduct

            setCallback(!callback)
            setLoading(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const checkAll = () => {
        // console.log(id)
        products.forEach(product => {
            product.checked = !isCheck
        });
        setProducts([...products])
        setIsCheck(!isCheck)
    }

    const deleteAll = () => {
        products.forEach(product => {
            if (product.checked) deleteProduct(product._id, product.images.public_id)
        })
    }

    if (loading) return <div ><Loading /></div>
    return (
        <>

            {
                isAdmin && <div className="delete-all">
                    <span>Select all</span>
                    <input type="checkbox" checked={isCheck} onChange={checkAll} />
                    <button onClick={deleteAll}>Delete All</button>
                </div>
            }
            <div className="products">
                {
                    products.map(product => {
                        return <ProductItem key={product._id} product={product}
                            isAdmin={isAdmin} deleteProduct={deleteProduct} handleCheck={handleCheck} />
                    })
                }
            </div>


            { products.length === 0 && <Loading />}
        </>
    )
}

export default Products
