import React from 'react';
import { List, ListItem, ListItemText, IconButton  } from '@mui/material';
import DeleteConfirmation from '../PopUp/DeleteConfirmation/Delete';

export const  CoisasList = (props) => {

  const { nome, origem, destino, id, coisaLength, setCoisaLength } = props;

  return (
    <>
      <List sx={{ width: '100%', maxWidth: 200, bgcolor: 'background.paper' }}>   
        <ListItem
            key={id}
            secondaryAction= {
              <IconButton aria-label="comment">
                <DeleteConfirmation coisaId = {id} coisaLength = {coisaLength} setCoisaLength = {setCoisaLength}/>
              </IconButton>
            }
          >
            <ListItemText primary={`${nome}`} />
        </ListItem>
      </List>
    </>
  );
}
