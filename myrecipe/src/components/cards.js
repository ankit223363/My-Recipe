import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '10px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex'
};
const RecipeReviewCard=({ recepie})=> {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        <Button size="small" onClick={handleOpen}>View Recipe</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='imgbox'><img className='imgclass' src={recepie.image} alt="Logo" /></div>
        
        <div className='instruct'>
        
          <label className='headinglabel'>INSTRUCTIONS</label>
          <p dangerouslySetInnerHTML={{__html:recepie.instructions}} />
          </div>
        
        </Box>
      </Modal>
      </CardActions>
    </Card>
    </>
  );
}
export default RecipeReviewCard;

