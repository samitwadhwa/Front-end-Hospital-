import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Pay after appointment</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <img src="https://www.freeiconspng.com/thumbs/success-icon/success-icon-10.png" alt="" />
          <br />
          <button onClick={handleClose} style= {{
            backgroundColor: "rgb(94 169 97)",
            color:" white",
            borderRadius: "5px",
            padding: "0.3rem",
            width: "7rem",
            marginLeft: "10px"

          }} >Close</button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Book Appointment now</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 className='font-bold text-lg text-center' id="parent-modal-title">Book Appointment</h2>
          <br />
          <div className="select">

          <select name =  "Select Day" id="">
            <option value="">
                Today
            </option>
            <option value="">
                Tomorrow
            </option>
          </select>
             <br  
             />        
          <select name =  "Availaible time slots" id="">
           
            <option value="">
                10AM - 2PM
            </option>
            <option value="">
                7PM - 10PM
            </option>
          </select>
          </div>
          <br />
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}