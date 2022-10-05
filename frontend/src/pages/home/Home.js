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

  return (
    <div>
      <h1>Coisas a Levar</h1>
      <CreateCoisa coisaLength = {coisaLength} setCoisaLength = {setCoisaLength}  />
      <div>
        {items.map( item => <CoisasList {...item} key={item.id} coisaLength = {coisaLength} setCoisaLength = {setCoisaLength} items= {items} />)}
      </div> 
    </div>
  )
}

