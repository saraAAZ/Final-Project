import * as React from 'react';
import './card.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import GroupsIcon from '@mui/icons-material/Groups';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

 
export default function BasicModal({info}) {
  let totalPrice = info.attributes.groupPrice;
  let pri =totalPrice/ info.attributes.groupQuantity ;
  const [open, setOpen] = React.useState(false);
  const [diable, setable] = React.useState(false);
  const [disable,setDis] = React.useState("");
  const [able] = React.useState(true);
  const [groupPrice, setGroupPrice] = React.useState(totalPrice);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let [amount, setAmount] = React.useState(info.attributes.groupQuantity);
  function increace (quantity) {
    
    if(quantity === amount){
        setable(true);
    }else{
        let inc = amount+1;
        setAmount(inc);
        setable(false);
        let newPrice = groupPrice + pri;
        setGroupPrice(newPrice);
    }          
}
function decreace () {
    if(amount>1){
        let dec = amount-1;
        setAmount(dec);
        setable(false);
         let newPrice = groupPrice- pri;
         console.log(newPrice);
         setGroupPrice(newPrice);

    }       
}
function abb(){
  if(info.attributes.groupQuantity <=1){
  return true;
  }else
  return false;
 }

console.log(info.attributes.groupQuantity);
  return (
    <div>
      <Button onClick={handleOpen}  size="small" disabled ={abb()}  ><GroupsIcon style={{ color: '#c7ad9c' }}/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           By With Group
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Please Choose the Quantity : <button  disabled={diable} onClick={()=>{increace(info.attributes.groupQuantity)}}>+</button>
           <span>{amount}</span>
           <button onClick={()=>{decreace()}}>-</button> 
          </Typography>
          <div> 
           <span> Total Price : {groupPrice}$</span>
        </div>
        </Box>
      </Modal>
    </div>
  );
}
