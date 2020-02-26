import React, { Component } from 'react'
import logo from './logo.svg';

class Header extends Component {
    render() {
        return (
            < header className='bg-blue' >
                <img src={logo} className='App-logo fl w-10 pa2' alt='logo' />
                <h1 className='fl tc h-25 w-75 pa2 light-blue'>feed.gg</h1>
            </header >
        )
    }
}

export default Header;