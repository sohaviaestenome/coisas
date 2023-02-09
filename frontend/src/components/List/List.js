import React from 'react';
import { List, ListItem, ListItemText, IconButton  } from '@mui/material';
import DeleteConfirmation from '../PopUp/DeleteConfirmation/Delete';

//display list of coisas from origem to destino
export const CoisasList = (props) => {
  const { origem, destino, coisaLength, setCoisaLength, items } = props;

  return (
    <>
    <List>
      {items.map(item => (
        <ListItem key={item.id}>
          <ListItemText primary={item.destino} />
        </ListItem>
      ))}
    </List>
    </>
  );
};



{/* <List sx={{ width: '100%', maxWidth: 200, bgcolor: 'background.paper' }}>
<h4>{origem} --- {destino}</h4>
{items
  .filter((item) => item.origem === origem && item.destino === destino)
  .map((item) => (
    <ListItem key={item.id} secondaryAction={
      <IconButton aria-label="comment">
        <DeleteConfirmation coisaId={item.id} coisaLength={coisaLength} setCoisaLength={setCoisaLength} />
      </IconButton>
    }>
      <ListItemText primary={`${item.nome}`} />
    </ListItem>
  ))}
</List> */}