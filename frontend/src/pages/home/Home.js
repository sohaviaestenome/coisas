import { CoisasList } from '../../components/List/List';
import {getCoisas} from '../../apis/coisas';
import React, { useEffect, useState } from 'react';
import { CreateCoisa } from '../../components/PopUp/CreateCoisa/CreateCoisa';

export const Home = () => {
  const [items, setItems] = useState([]);
  const [coisaLength, setCoisaLength] = useState([100]);

  useEffect(() => {
    getCoisas().then(res =>{
      setItems(res.data);
    })
  }, [coisaLength])

  let cenas = items.map(value => {
    return value.nome;
  });

  console.log(cenas);
  console.log(items, 'items')
  return (
    <div>
      <h1>Coisas a Levar</h1>
      <CreateCoisa />
      <CoisasList items = {items} coisaLength = {coisaLength} setCoisaLength = {setCoisaLength} />
    </div>
  )
}