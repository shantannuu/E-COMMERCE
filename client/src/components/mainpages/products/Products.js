import React, { useContext, useState } from 'react'
import { GlobalState } from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
import Loading from '../utils/loading/Loading'




function Products() {
    const state = useContext(GlobalState)
    const [products, setProducts] = state.productsAPI.products;
    const [isLogged, setIsLogged] = state.userAPI.isLogged;
    const [isAdmin, setIsAdmin] = state.userAPI.isAdmin;
    console.log(products)





    return (
        <>
            <div className="products">
                {
                    products.map(product => {
                        return <ProductItem key={product._id} product={product}
                            isAdmin={isAdmin} />
                    })
                }
            </div>


            { products.length === 0 && <Loading />}
        </>
    )
}

export default Products
