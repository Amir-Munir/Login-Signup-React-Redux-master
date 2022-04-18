import React from 'react';
import { Link } from 'react-router-dom';

import { Cart } from './Cart';

export const NavBar = () => {
    return (
        <header >
            <nav className='header__nav1 header__nav'>
            <div className='both'>
                <div className='h-left'>
                    <h1 >
                        <a href="/" className="nav-logo">Logo</a>
                    </h1>
                </div>
            
                <div className='div-right'>
                    <ul className='header__list '>
                        <li className='header__item'><Link to='/'>LogIn</Link></li>
                        <li className='header__item'><Link to='/signUp'>SignUp</Link></li>
                        <li className='header__item'><Link to='/api'>API</Link></li>
                        <li className='header__item'><Link to='/slider'>Slider</Link></li>
                        <li className='header__item'><Link to='/button'>Button</Link></li>
                        <li className='header__item'><Link to='/shazam'>Shazam</Link></li>
                        <li className='header__item'><Link to='/quiz'>Quiz</Link></li>
                        <li className='header__item'><Link to='/div'>Div</Link></li>
                        <li className='header__item'><Link to='/table'>Table</Link></li>
                        <li className='header__item'><Link to='/menu'>Menu</Link></li>
                        <Cart />
                    </ul>
                </div>
            
            </div>
            
            </nav>
        </header>
    )
}
