import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [cart, setCart] = useState([])
    const [user, setUser] = useState([])
    const [history, setHistory] = useState([])
    const [callback, setCallback] = useState(false);

    useEffect(() => {
        if (token) {
            const getUser = async () => {
                try {
                    const res = await axios.get('/user/infor', {
                        headers: { Authentication: token }
                    })

                    setIsLogged(true)
                    setUser(res.data)
                    res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false)
                    setCart(res.data.cart)
                    console.log(res)
                } catch (err) {
                    alert(err.response.data.msg)
                }
            }
            getUser();
        }
    }, [token])

    useEffect(() => {
        if (token) {
            const getHistory = async () => {
                try {
                    const res = await axios.get('/user/history', {
                        headers: { Authentication: token }
                    })


                    // console.log(res)
                    setHistory(res.data)
                } catch (err) {
                    alert(err.response.data.msg)
                }
            }
            getHistory();
        }
    }, [token, callback])

    const addCart = async (product) => {
        if (!isLogged) return alert("Please login to continue buying")

        const check = cart.every(item => {
            return item._id !== product._id
        })

        if (check) {
            setCart([...cart, { ...product, quantity: 1 }])
            // console.log([...cart, { ...product, quantity: 1 }])
            await axios.patch('/user/addcart', { cart: [...cart, { ...product, quantity: 1 }] }, {
                headers: { Authentication: token }
            })
        } else {
            alert("This product has been added to your cart")
        }
    }

    return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        cart: [cart, setCart],
        addCart: addCart,
        user: [user, setUser],
        history: [history, setHistory],
        callback: [callback, setCallback]
    }



}

export default UserAPI
