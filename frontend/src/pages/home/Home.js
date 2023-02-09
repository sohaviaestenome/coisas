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
        {items.map( list => {
          <div key={list.id}>
          return (
            <CoisasList 
            key={item.id} 
            coisaLength = {coisaLength} 
            setCoisaLength = {setCoisaLength} 
            items= {items} 
            destinations = {destinations}
            />
          )
          </div>}
        )}
      </div> 
    </div>
  )
}


//base code
// import React from 'react';
// import { List, ListItem, ListItemText } from '@material-ui/core';

// const listsData = [
//   {
//     id: 1,
//     title: 'List 1',
//     items: [
//       { id: 1, text: 'Item 1' },
//       { id: 2, text: 'Item 2' },
//       { id: 3, text: 'Item 3' }
//     ]
//   },
//   {
//     id: 2,
//     title: 'List 2',
//     items: [
//       { id: 4, text: 'Item 4' },
//       { id: 5, text: 'Item 5' },
//       { id: 6, text: 'Item 6' }
//     ]
//   }
// ];

// function MyLists(props) {
//   return (
//     <div>
//       {listsData.map(list => (
//         <div key={list.id}>
//           <h2>{list.title}</h2>
//           <List>
//             {list.items.map(item => (
//               <ListItem key={item.id}>
//                 <ListItemText primary={item.text} />
//               </ListItem>
//             ))}
//           </List>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default MyLists;
