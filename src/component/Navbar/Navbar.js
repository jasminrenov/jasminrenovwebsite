import React from 'react'
import logo from '../../Assets/logo.webp'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg">
      <div class="container-fluid">
        <NavLink to="/"><img src={logo} alt="JasminRenovLogo" /></NavLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Nos services
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <NavLink to="/Particular" className="dropdown-item"><li>Pour les particuliers</li></NavLink>
                <NavLink to="/Professionel" className="dropdown-item"><li>Pour les professionnels</li></NavLink>
                
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                À propos de nous
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <NavLink to="/NosRealisationPage" className="dropdown-item"><li>Nos réalisations</li></NavLink>
              <NavLink to="/client" className="dropdown-item"><li>Avis clients</li></NavLink>
              <NavLink to="/ZonesIntervention" className="dropdown-item"><li>Nos zones d’intervention</li></NavLink>
              <NavLink to="/NosFournisseurs" className="dropdown-item"><li>Nos fournisseurs</li></NavLink>
                
              </ul>
            </li>

            {/* <li class="nav-item">
             
              <NavLink to="/Blog" className="dropdown-item"><li>Blog</li></NavLink>
            </li> */}
            <li class="nav-item">

              <NavLink to="/Faq" className="dropdown-item"><li>Faq</li></NavLink>
            </li>
            <li class="nav-item">
              
              <NavLink to="/Contact" className="dropdown-item"><li>Contact</li></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar