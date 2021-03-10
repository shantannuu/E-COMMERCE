import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import Products from './products/Products'
import DetailProduct from './detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'
import Cart from './cart/Cart'
import OrderDetail from './history/OrderDetails'

import NotFound from './utils/not_found/NotFound'

import History from './history/History'
import Category from './categories/Categories'
import CreateProduct from './createProduct/CreateProduct'

import { GlobalState } from '../../GlobalState'


function Pages() {
    const state = useContext(GlobalState);
    const [isLogged] = state.userAPI.isLogged;
    const [isAdmin] = state.userAPI.isAdmin;


    return (
        <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/detail/:id" exact component={DetailProduct} />

            <Route path="/login" exact component={isLogged ? NotFound : Login} />
            <Route path="/register" exact component={isLogged ? NotFound : Register} />

            <Route path="/cart" exact component={Cart} />

            <Route path="/history" exact component={isLogged ? History : NotFound} />
            <Route path="/history/:id" exact component={isLogged ? OrderDetail : NotFound} />

            <Route path="/category" exact component={isAdmin ? Category : NotFound} />
            <Route path="/create_product" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="*" exact component={NotFound} />
        </Switch>
    )
}

export default Pages
