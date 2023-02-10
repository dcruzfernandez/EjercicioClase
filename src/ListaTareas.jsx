import axios from 'axios';
import React from 'react';



const ObtenerDatos=async(estado)=>{
    try {
      const url=`https://jsonplaceholder.typicode.com/todos?completed=${estado}`;

      const {data}= await axios.get(url);
   
      const urlU=`https://jsonplaceholder.typicode.com/users`;
      const responseU=await fetch(urlU);
      const dataU=await responseU.json();

      const datos=data.map((todo)=>{
        const usuario=dataU.find((user)=>todo.userId===user.id);
        return {...todo,name:usuario.name}
      });
      
      //console.log(datos);
      return datos;
    } catch (error) {
      return [];
    }
    
  }

export const ListaTareas = () => {
  return (
    <div>ListaTareas 1</div>
  )
}
