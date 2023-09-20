'use client';
import React, { useState, useEffect } from 'react';
import { text } from 'stream/consumers';



export default function Home() {
  
  return (

    <div className='relative h-screen'>
       <div className='absolute bg-blue-500 w-48 h-60 mx-20'>
       <form>
        <div className=" text-black "><br></br>
          <input type="text" placeholder='Title'></input><br></br><br></br>
          <input type="text" placeholder='Menu item Description'></input><br></br><br></br>
          <input type="number" placeholder='Price in USD' ></input>
          </div><br></br>
        <button className="btn p-3 items-center bg-red-400">Add item</button>
      </form><div></div>
     <div className='grid grid-cols-6 justify-center items-center'>
      <div className=' w-screen  grid grid-cols-3 my-6 h-60'>
        <div></div>
      <h1>hello doc</h1>
      </div>
     </div>
     </div>
    </div>
    

    
);
  };

 