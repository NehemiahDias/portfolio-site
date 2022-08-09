import React from 'react'

function HeaderComponent() {
  return (
    <header>
        <nav id='navbar'>
            <h1>Nehemiah Dias</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#"><i className="fa-solid fa-sun"></i></a></li>
            </ul>
        </nav>
    </header>
  )
}

export default HeaderComponent