import React from 'react';
import classes from './Navbar.module.css';

function Navbar() {
  return (
    <React.Fragment>
    <div className='navbar'>
      Home
      Teams
    </div>
    <label>   Choose a Year: </label>
    <select className = {classes.dropdown} >
      <option value= "2018" >2018 </option>
      <option value="2019"> 2019</option>
      <option value="2020">2020</option>
      <option value="2021">2021</option>
      <option value="2022">2022</option>
    </select>
    </React.Fragment>

  )
}

export default Navbar;
