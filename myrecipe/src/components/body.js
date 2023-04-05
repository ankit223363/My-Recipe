import React, { useState } from 'react'
import Recipes from './recipes'
import Popular from './popular'
import Search from './search'
import SearchedItem from './searchedItem';

function Body() {
  const [search , setsearch]=useState('');
  return (
    <div id='mainbody'>
      <Search search={search} setsearch={setsearch}/>
      <div className='subbody'>
    {search.length>0?<SearchedItem search={search}/>:<></>}
    </div>
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