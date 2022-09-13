import React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox, IconButton  } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';

export const  CoisasList = (props) => {

  const { items } = props;
  
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {items.map((value) => (
        <ListItem
          key={value}
          secondaryAction={
            <IconButton aria-label="comment">
              <CommentIcon />
            </IconButton>
          }
        >
          <ListItemText primary={`${value.nome}`} />
        </ListItem>
      ))}
    </List>
  );
}
