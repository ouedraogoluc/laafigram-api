import React from 'react'

const Menu = () => {
    return (
        <div class="container">
            <div class="collapse navbar-collapse" id="navbarStandard">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown dropdown-menu-on-hover"><a class="nav-link " id="navbarDropdownHomes" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Accueil</a>
                    </li>
                    <li class="nav-item dropdown dropdown-menu-on-hover"><a class="nav-link " id="navbarDropdownHomes" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Medecin</a>
                    </li>
                    <li class="nav-item dropdown dropdown-menu-on-hover"><a class="nav-link " id="navbarDropdownHomes" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Patient</a>
                    </li>
                    <li class="nav-item dropdown dropdown-menu-on-hover"><a class="nav-link " id="navbarDropdownHomes" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">centre Medical</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu
