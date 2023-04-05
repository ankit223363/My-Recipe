import React from 'react'
import { NavLink  } from 'react-router-dom'
function Sidelist() {
    const listitems=['Home','Popular','Trending']
  return (
    <div className='sidelist'>
        {listitems.map((item)=>
        <NavLink to={item} style={{ textDecoration: 'none' }}>
        <li key={item}>{item}</li>
        </NavLink>)}
    </div>
  )
}

export default Sidelist