import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";


import { useRole } from "../../requireAuth";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectListGift } from "../../store";
import { useAppDispatch } from "../../hooks";
import { getAllGifts } from "../../store/ThunkCreator";
import { Button } from "@mui/material";

export function MultiActionAreaCard() {
  const { value: gifts } = useSelector(selectListGift);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllGifts("запрос"));
  }, []);
  const [value, setValue] = useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  };
  return (  
      
      <ul>
        {gifts.map((gift, index) => (
          <li key={gift.id}>{gift.title}</li>
          // <ListItem button key={index + event.title}>
          //   <ListItemAvatar>
          //     <Avatar alt="Profile Picture" src={"person"} />
          //   </ListItemAvatar>
          //   <ListItemText primary={event.title} secondary={event.description} />
          // </ListItem>
        ))}
      </ul>
        {/* <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent> */}
      
      <CardActions>
        {/* <Button size="small" color="primary" onClick={navigateMain}>
          Share
        </Button> */}
      </CardActions>
    
  );
}
