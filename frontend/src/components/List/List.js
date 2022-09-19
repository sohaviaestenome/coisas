import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, IconButton  } from '@mui/material';
import DeleteConfirmation from '../DeleteConfirmation/Delete';

export const  CoisasList = (props) => {

  const { items, coisaLength, setCoisaLength } = props;
  
  
  return (
    
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {items.map((value) => (
        <ListItem
          key={value}
          secondaryAction= {
            <IconButton aria-label="comment">
              <DeleteConfirmation coisaId = {value.id} coisaLength = {coisaLength} setCoisaLength = {setCoisaLength}/>
            </IconButton>
          }
        >
          <ListItemText primary={`${value.nome}`} />
        </ListItem>
      ))}
    </List>
  );
}
