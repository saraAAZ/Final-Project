
import Model from './Model.jsx';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import * as React from 'react';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function MediaCard({info}) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const favClick = (event) => {
    let i = info.attributes.fovproduct;
    i = i+1;
    console.log(info.attributes.fovproduct , i);
  };
  console.log(info.attributes.fovproduct);
  return (
    <Card sx={{ maxWidth: 345 }} className = "border-card">
      <CardContent className="card-style">
       <span className = "product">{info.attributes.name}</span>
     
       <div className ="div-line"></div>
      <img src={info.attributes.Image}
       className="image-style"></img>
      </CardContent>
      <div className="information-style font">    
     <div className="font container">
     <span className= "price">Price : {info.attributes.price} $</span>
     {
       info.attributes.discount != null?
       <span className= "discount">{info.attributes.discount}% </span>:null
     }
     
     </div>
     {
      info.attributes.groupQuantity>1 && info.attributes.groupPrice  ?
      <span>By with Group {info.attributes.groupQuantity} at {info.attributes.groupPrice}</span>:null
    }

      </div>
      <CardActions className="choices-container">
        <Button size="small"><FavoriteIcon style={{ color: '#c7ad9c' }} onClick={favClick}/></Button>
         <Model info = {info}/>
         <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
    
        </ExpandMore>
      </CardActions>
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography >  {info.attributes.store.data.attributes.city}</Typography>
          <Typography >{info.attributes.store.data.attributes.address}</Typography>
          <Typography > {info.attributes.store.data.attributes.name}</Typography>
    
        
        </CardContent>
      </Collapse>
   
    </Card>
    
  );
}