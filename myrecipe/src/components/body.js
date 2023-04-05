import React from 'react'
import Recipes from './recipes'
import Popular from './popular'

function Body() {
  return (
    <div id='mainbody'>
    <div className='subbody'>
    <Popular />
    </div>
    <div className='subbody'>
    <Recipes />
    </div>
    
    </div>
  )
}

export default Body