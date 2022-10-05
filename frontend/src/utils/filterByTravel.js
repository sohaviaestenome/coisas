// // import { List, ListItem, ListItemText, IconButton  } from '@mui/material';
// // import DeleteConfirmation from '../PopUp/DeleteConfirmation/Delete';


// export const filterByTravel = (arr, origin, destination, propsi) => {
//   arr.filter((item, index) => {
//     if (origin === item.origem && destination === item.destino) {
//       return (
//         <ListItem
//             key={item.id}
//             secondaryAction= {
//               <IconButton aria-label="comment">
//                 <DeleteConfirmation coisaId = {item.id} coisaLength = {coisaLength} setCoisaLength = {setCoisaLength}/>
//               </IconButton>
//             }
//         >
//           <ListItemText primary={`${item.nome}`} />
//         </ListItem>
//       )
//     }
//   })
// }