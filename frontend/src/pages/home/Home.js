import { CoisasList } from '../../components/List/List';
import {getCoisas} from '../../apis/coisas';
import React, { useEffect, useState } from 'react';

export const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getCoisas().then(res =>{
      setItems(res.data);
    })
  }, [])

  let cenas = items.map(value => {
    return value.nome;
  });

  console.log(cenas);
  console.log(items, 'items')
  return (
    <div>
      <h1>Coisas a Levar</h1>
      <CoisasList items = {items} />
    </div>
  )
}