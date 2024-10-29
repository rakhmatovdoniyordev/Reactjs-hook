import { useState } from 'react'
import './App.css'
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Todolist from './Components/Todolist';

function App() {

  return (
    <div className='w-full flex items-center justify-center py-14'>
      <Todolist/>
      <ToastContainer/>
    </div>
  )
}

export default App
