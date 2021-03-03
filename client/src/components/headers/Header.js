import React, { useContext, useState } from 'react'
import { GlobalState } from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Cart from './icon/cart.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Header() {
    const state = useContext(GlobalState)
    const [isLogged, setIsLogged] = state.userAPI.isLogged;
    const [isAdmin, setIsAdmin] = state.userAPI.isAdmin;

    const logoutUser = async () => {
        await axios.get("/user/logout")
        localStorage.clear();
        setIsLogged(false)
        setIsAdmin(false)
    }

    const adminRouter = () => {
        return (
            <>
                <li><Link to="/create_product">Create Product</Link></li>
                <li>
                    <Link to="/category">Categories</Link>
                </li>
            </>
        )
    }

    const LoggedRouter = () => {
        return (
            <>
                <li><Link to="/history">History</Link></li>
                <li>
                    <Link to="/" onClick={logoutUser}>Logout</Link>
                </li>
            </>
        )
    }

    return (
        <header>
            <div className="menu">
                <img src={Menu} alt="" width="30" />
            </div>

            <div className="logo">
                <h1>
                    <Link to="/">{isAdmin ? 'ADMIN' : 'E-COMMERCE'}</Link>
                </h1>
            </div>

            <ul >
                <li><Link to="/">{isAdmin ? 'Products' : 'Shop'}</Link></li>

                {isAdmin && adminRouter()}
                {
                    isLogged ? LoggedRouter() : <li>
                        <Link to="/login">Login ✥ Register</Link>
                    </li>
                }



                <li>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>

            </ul>

            {
                isAdmin ? '' :
                    <div className="cart-icon">
                        <span>0</span>
                        <Link to="/cart">
                            <img src={Cart} alt="" width="30" />
                        </Link>
                    </div>
            }

        </header>
    )
}

export default Header
