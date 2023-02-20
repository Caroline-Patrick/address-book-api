import axios from 'axios';
import React, { useState, useEffect } from 'react';

const baseUrl = 'https://randomuser.me/api?results=25';

export default function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios.get(baseUrl).then(response => {
      setUsers(response.data.results);
    });
  }, []);

  if (!users) return null;

  return (
    <div>
      {users.map(user => {
        const { title, first, last } = user.name;
        const {thumbnail} =user.picture

        return (
          <ul key={user.id}>
            <li>
              <h4>{`${title}. ${first} ${last}`}</h4>
              <img src={thumbnail} />
            </li>
          </ul>
        );
      })}
    </div>
  );
}


// import axios from 'axios'
// import './App.css';
// import React, {useState, useEffect} from 'react'

// const baseUrl = 'https://randomuser.me/api?results=25'
// export default function App() {
//   const [users, setUsers] = useState(null); 
//   let name = {}
//   useEffect(()=>{
//     axios.get(baseUrl).then((response)=>{
//       console.log(response.data.results)
//       setUsers(response.data.results)
//       console.log(response.data.results[0].picture.thumbnail)
//     })
      
//   },[]); 

//   if(!users) return null

//   return (
 
//       <div>
//         {users.map((user)=>{
//           let title =arr.name.title;
//           let first = arr.name.first;
//           let last = arr.name.last
//           <ul>
//             <li key ={users.id}>
//               <h4>{title}. {first} {last}</h4>
//             </li>
            
//           </ul>
//        ))};
//       </div>
   
//   );

// }



// // <ul>
//     //   {beer.map((beer)=> (
//     //     <li key = {beer.id}>
//     //       <h3>{beer.name}</h3>
//     //       <h6>{beer.tagline}</h6>
//     //     </li>
//     //   ))}
//     // </ul>
