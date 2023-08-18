// import React from "react"

// const RideSidebar = () => {
//   return (
//     <>
//     <h1>Hello</h1>
//     </>
//     )
// }

// export default RideSidebar;
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function RideSidebar() {
  const percentage = 73
  return (
    // Progress Bar Code
    <div style={{margin:"40px", maxWidth:"30%"}}>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
          
          <div style={{display:"flex", justifyContent:"space-between"}}>
          <Typography variant="h5" component="div">
          Total Calls
          </Typography> 
          <Typography variant="h5" component="div">
          289
        </Typography> 
          </div>
         
         
         <div style={{display:"flex",flexDirection:"column", padding:"20px"}}>
         <Typography variant="h6" component="div" >
             No  Resolves
              <div className="progressBar">
                <ProgressBar striped variant="info" now={percentage} label={`${percentage}%`} />
             </div>
          </Typography>

          <Typography variant="h6" component="div" style={{paddingTop:"10px"}}>
              Resolves
              <div className="progressBar">
                <ProgressBar striped  now={percentage} label={`${percentage}% `} />
               </div>
          </Typography>

          <Typography variant="h6" component="div" style={{paddingTop:"10px"}}>
              Call Backs
              <div className="progressBar">
                <ProgressBar striped variant="danger"  now={percentage} label={`${percentage}% `} />
              </div>
          </Typography>     
       </div>
       
          </CardContent>
    </Card>
    </div>

    // Date Code

  );
}
