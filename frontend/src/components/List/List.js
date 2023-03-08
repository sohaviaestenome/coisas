import React, { useMemo } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

export const CoisasList = (props) => {
  const { origem, destino, items } = props;

  const filteredItems = useMemo(() => {
    return items.filter(item => item.origem === origem && item.destino === destino);
  }, [items, origem, destino]);

  return (
    <>
      {filteredItems.length > 0 ? (
        <List>
          {filteredItems.map(item => (
            <ListItem key={item.id}>
              <ListItemText primary={item.nome} />
            </ListItem>
          ))}
        </List>
      ) : (
        <p>No coisas found for the selected origem and destino.</p>
      )}
    </>
  );
};
