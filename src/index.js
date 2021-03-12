import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
let postsData = [
  {id: 1, message:'Hi,How are you?', likeCount:24},
  {id: 2, message:'I am nice', likeCount:12},
  {id: 2, message:'Yo yo', likeCount:13},
  {id: 2, message:'Blablabla', likeCount:5}
]

let dialogData = [
  {id: 1, name: 'Shushanik'},
  {id: 2, name: 'Edo'},
  {id: 3, name: 'Laurik'},
  {id: 4, name: 'Masisi MRU'}
];

let messagesData = [
  {id: 1, message: 'How are you'},
  {id: 2, message: 'What are you doing'},
  {id: 3, message: 'Hi'},
  {id: 4, message: 'Shnorhavor'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts = {postsData} dialogs = {dialogData} messages = {messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
