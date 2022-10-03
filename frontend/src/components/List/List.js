import React from 'react';
import { List, ListItem, ListItemText, IconButton  } from '@mui/material';
import DeleteConfirmation from '../PopUp/DeleteConfirmation/Delete';

export const  CoisasList = (props) => {

  const { item, coisaLength, setCoisaLength } = props;
  
  return (

    <List sx={{ width: '100%', maxWidth: 200, bgcolor: 'background.paper' }}>
        <ListItem
          key={item}
          secondaryAction= {
            <IconButton aria-label="comment">
              <DeleteConfirmation coisaId = {item.id} coisaLength = {coisaLength} setCoisaLength = {setCoisaLength}/>
            </IconButton>
          }
        >
          <ListItemText primary={`${item.nome}`} />
        </ListItem>
      ))
    </List>

  );
}
