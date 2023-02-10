import React from 'react';
import ReactDOM from 'react-dom';

//import App from './App';
import { Tarea } from './Tarea';



ReactDOM.render(
  <React.StrictMode>
    <Tarea title={'hacer aplicación'} name={'luis'}/>
  </React.StrictMode>,
  document.getElementById('root')
);


