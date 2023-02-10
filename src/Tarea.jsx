import React from 'react';



export const Tarea = ({title,name}) => {
  return (
    <div class="card">
        <div class="card-header">
            Tarea {title}
        </div>
        <div class="card-body">
            <h5 class="card-title">Usuario {name}</h5>
        </div>
    </div>
  )
}
