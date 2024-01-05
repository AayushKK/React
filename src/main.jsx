import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ImageSlider from './ImageSlider.jsx'
import Navbar from './Navbar.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <ImageSlider />
    <App />
   
  </React.StrictMode>,
)

/*
<div class=" relative container  mt-5 self-center max-w-md ">
            <form class="bg-white shadow-md  rounded px-8 pt-6 pb-8 mb-4">
                <div class="md:flex md:items-center justify-center mb-4">
                <div class="mb-4 md:w-1/4">
                  <label class="block text-gray-700 text-sm font-bold mb-2 md:text-center  md:mb-0 " for="username">
                  Username
                  </label>
                 </div>
                 <div class="mb-4 md:w-3/4">
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-red-500" id="username" type="text" placeholder="Username">
                </div>
                </div>
                <div class="md:flex md:items-center justify-center md:mb-4 ">
                <div class="mb-4 md:w-1/4 md:pl-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2 md:text-left  md:mb-1 " for="password">
                  Password
                  </label>
                </div>
                <div class="mb-4 md:w-3/4 md:mt-1">
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline hover:border-red-500 " id="password" type="password" placeholder="*************">
                 
                </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                <div class="mb-4 md:w-1/3"></div>
                <div class="mb-4 md:w-3/4">
                <button class=" object-top px-7 py-4  border  text-lg leading-none  bg-red-300 rounded-3xl text-white  hover:bg-red-500 ">
                 Submit
                </button>
                </div>
            </form>
            </div>
  


*/