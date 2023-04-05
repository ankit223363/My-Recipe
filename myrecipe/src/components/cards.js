import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';


const RecipeReviewCard=({title , recepie})=> {
  
  return (<>
  
    
  <Card sx={{ maxWidth: 345 , maxHeight: 300 }}>
      <CardMedia
        sx={{ height: 140 , color:'black'}}
        image={recepie.image}
      />
      <CardContent>
        <div className='cardlabel' style={{margin:'0px'}}>
        <label  style={{color:'black'}}>{recepie.title}</label>  
        </div>
             
      </CardContent>
      <CardActions>
        <Button size="small">View Recipe</Button>
      </CardActions>
    </Card>
    </>
  );
}
export default RecipeReviewCard;