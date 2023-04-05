import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cardcarousel from './carousel';
function SearchedItem({search}) {
    const [recipes,setrecepie]=useState([]);
  useEffect(()=>{
    axios.get(`https://api.spoonacular.com/recipes/random?apiKey=6751e0b68fad44be93678dae469ffede&tags=${search}&number=9`)
  .then( (response)=> {
    // handle success
    setrecepie(response.data.recipes);
  })
  },[search])
  return (
    <div id='mainbody'>
     <Cardcarousel title='Search Results' recipes={recipes} />
      </div>
  )
}

export default SearchedItem