import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='bigcontainer'>
        <div className='container'>
<nav className='navbar'>
<ul className='navbar_ul'>
    <li><a className='nav_link sal' href="">Home</a></li>
    <li><a className='nav_link' href="">Business</a></li>
    <li><a className='nav_link' href="">Entertainment</a></li>
    <li><a className='nav_link' href="">General</a></li>
    <li><a className='nav_link' href="">Health</a></li>
    <li><a className='nav_link' href="">Science</a></li>
    <li><a className='nav_link' href="">Sports</a></li>
    <li><a className='nav_link' href="">Technology</a></li>
</ul>
</nav>
    </div>
    </div>
  )
}

export default Header