import { CoisasList } from '../../components/List/List';
import {getCoisas} from '../../apis/coisas';
import React, { useEffect, useState } from 'react';
import { CreateCoisa } from '../../components/PopUp/CreateCoisa/CreateCoisa';


export const Home = () => {
  const [items, setItems] = useState([]);
  const [coisaLength, setCoisaLength] = useState([100]);
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    getCoisas().then(res =>{
      setItems(res.data);
    })
  }, [coisaLength])



useEffect(() => {
  const arr1 = [];
  items.forEach((item) => {
    arr1.push([item.origem, item.destino]);
  });
  console.log(arr1, 'arr1');

  arr1.forEach(pair => {
    if (!destinations.length) {
      setDestinations(destinations.push(pair));
    }

    destinations.forEach(destination => {
      if(pair[0]===destination[0] && pair[1]=== destination[1]) {
        return;
        }else {
          setDestinations(previous => [...previous, pair]);
        }
      }
    )
  });  
   
}, [items, destinations]);
  console.log(destinations, 'destinations')

  return (
    <div>
      <h1>Coisas a Levar</h1>
      <CreateCoisa coisaLength = {coisaLength} setCoisaLength = {setCoisaLength}  />
      <div>
        {items.map( item => {
          return (
            <CoisasList 
            {...item} 
            key={item.id} 
            coisaLength = {coisaLength} 
            setCoisaLength = {setCoisaLength} 
            items= {items} 
            destinations = {destinations}
            />
          )}
        )}
      </div> 
    </div>
  )
}

