import React from 'react'
import { Link } from 'gatsby'
import './dropdown.css'


const DropdownNavBar = () => {
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  },
  
  <div class="dropdown">
    <button onClick="myFunction()" class="dropbtn">
      Dropdown
    </button>
    <div className="myDropdown">
      <ul>
        <li>
          <Link to='/LaurelStreet'>Laurel Street</Link>
        </li>
        <li>
          <Link to='/EmmaStreet'>Emma Street</Link>
        </li>
      </ul>
    </div>
  </div>
}

export default DropdownNavBar