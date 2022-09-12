import React, { useEffect } from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox, IconButton  } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import { getCoisas } from '../../apis/coisas';

export const CoisasList = () => {

  const [items, setItems] = React.useState([]);

  useEffect(()=> {
    getCoisas().then(res => {
      setItems(res.data);
    }, [])
  })

  console.log(items, 'items');
  
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {items.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            secondaryAction= {
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            }
            disablePadding
          >
          </ListItem>
        );
      })}
    </List>
  );
}
