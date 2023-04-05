import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cardcarousel from './carousel';
function Popular() {
  const [recipes,setrecepie]=useState([]);
  useEffect(()=>{
    axios.get('https://api.spoonacular.com/recipes/random?apiKey=6751e0b68fad44be93678dae469ffede&number=9')
  .then( (response)=> {
    // handle success
    setrecepie(response.data.recipes);
  })
  },[])
  return (
    <div id='mainbody'>
     <Cardcarousel title='Popular Recipes' recipes={recipes} />
      </div>
  )
}

export default Popular