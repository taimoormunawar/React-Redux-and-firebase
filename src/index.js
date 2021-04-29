import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './app/layout/style.css';
import App from './app/layout/App.jsx';
const rootE1= document.getElementById('root')
function render(){
ReactDOM.render(
  
    <App />, rootE1);
  }
if(module.hot){
  module.hot.accept('./app/layout/App.jsx', function(){
    setTimeout(render)
  })
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
render();
