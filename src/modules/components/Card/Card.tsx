import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectListEvent, selectListGift } from "../../store";
import { useAppDispatch } from "../../hooks";
import { getAllEvents, getAllGifts } from "../../store/ThunkCreator";
import { Button } from "@mui/material";
import { Gift } from "../Gift";
import { Modal } from "../Modal";
import { CreateGift } from "../CreateGift";

export function MultiActionAreaCard(props: any) {
  const { value: events } = useSelector(selectListGift);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllGifts("запрос"));
  }, []);
  const [value, setValue] = useState(0);
  const ref = React.useRef<HTMLDivElement>(null);  
  
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      
      { events.map(event => <Gift event={event} key={event.id} />)} 
      

     
      {<Modal title="Add new gift"><CreateGift/></Modal>}
    </div>
  )
    }   