import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


function Search({setsearch}) {
    const onClick=()=>{
        setsearch(searched)
    }
    const[searched,setsearched]=React.useState()
    const onChange=(e)=>{
        setsearched(e.target.value)
        console.log(searched);
    }
  return (
    <div style={{display: 'flex'}}><div className='search'><label >Search</label></div>
    <Paper
    component="form"
    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 200 ,margin: '15px' , color : 'black'}}
  >
    
    
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder="My Recipes"
      value={searched}
      onChange={onChange}
    />
    
    
  </Paper>
  <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={onClick}>
      <SearchIcon />
    </IconButton>
  </div>
  )
}

export default Search