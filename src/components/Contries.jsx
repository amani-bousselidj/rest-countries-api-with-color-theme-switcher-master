import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
export default function Contries(props) {
  return (
    <>
    <Card>
      <Link to={props.name} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.flagUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" sx={{ flexGrow: 1,fontWeight: "800", fontSize: "1rem" }}>
            {props.name}
          </Typography>
          <Typography variant="subtitle1" color="text.primary" sx={{fontWeight: "600"}}>
              Population: 
            <Typography variant="body2" color="text.secondary"sx={{display:'inline-block',p:"0 0.2rem"}}>
             {props.population}
            </Typography>
          </Typography>
          <Typography variant="subtitle1" color="text.primary" sx={{fontWeight: "600"}}>
              Region: 
            <Typography variant="body2" color="text.secondary"sx={{display:'inline-block',p:"0 0.2rem"}}>
             {props.region}
            </Typography>
          </Typography>
          <Typography variant="subtitle1" color="text.primary" sx={{fontWeight: "600"}}>
              Capital: 
            <Typography variant="body2" color="text.secondary"sx={{display:'inline-block',p:"0 0.2rem"}}>
             {props.capital}
            </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
    </>
  )
}
