import React from 'react'
import CartWidget from './CartWidget'
const NavBar = () =>{
    return (
            <nav className= "card">
            <h2>Tienda</h2>
            <CartWidget/>
            </nav>
    )
}
export default NavBar;