import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
//mette a jour state arry !!!state.length
const Navbar = () => {
////Cela joue un rôle si vous créez un nouvel objet dans votre sélecteur
//Le résultat sera toujours un nouvel objet, donc par défaut useSelector supposera toujours
// crrer une nouvel sous scription
    const state = useSelector(state => state.handleCart)
    return (//bootsrap navigation bar
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> React Ecommerce</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" 
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Accueil </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Produits</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">Environ</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
        <div className="buttons text-center">
            <NavLink to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1">
            </i> Connectez-vous</NavLink>
            <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1">
            </i> Register</NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1">
            </i> Carte ({state.length}) </NavLink>
        </div>
    </div></div></nav>
)}
export default Navbar;