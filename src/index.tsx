import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';

import {createServer} from 'miragejs'

createServer({
  routes(){
     this.namespace = 'api';
     this.get('/transctions', ()=>{
       return [
         {
           id: 1,
           title: "transctions 1",
           amount: 400,
           type: 'deposit',
           category: 'food',
           createdAt: new Date()
         }, 
         {
          id: 2,
          title: "transctions 2",
          amount: 200,
          type: 'withdrow',
          category: 'aluguel',
          createdAt: new Date()
        }
       ]
     })
  }
})



ReactDOM.render(
  <React.StrictMode>
    <App />  
  </React.StrictMode>,
  document.getElementById('root')
);


