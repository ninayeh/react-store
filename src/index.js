import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'Router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'css/app.scss'
import 'css/style.scss'

ReactDOM.render(
  <div>
  <ToastContainer
    position="top-right"
    autoClose={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnVisibilityChange
    draggable
  />  
    <Router />
  </div>,
  document.getElementById('root'));