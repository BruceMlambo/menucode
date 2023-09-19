'use client';
import { title } from 'process';
import React, { useState, useEffect } from 'react';
import { text } from 'stream/consumers';
import { IExpense } from './next/types/menu';




export default function Home() {
  const [title, setTitle] = useState<IExpense[]>([]);
  const [menu,setMenu] = useState("");
  const [price,setPrice] = useState(0);
  const [editItem,setEditItem] = useState<IExpense>({
    expenseId: "",
  title: "",
  menu: "",
  price: 0
  });

  
  function updateState() {
    throw new Error('Function not implemented.');
  }

  function generateRandomString(arg0: number) {
    throw new Error('Function not implemented.');
  }

  return (

    <div className='relative h-screen'>
       <div className='absolute bg-blue-500 w-48 h-60 mx-20'>
       <form>
        <div className=" text-black "><br></br>
          <input type="text" value={title} 
              onChange={(event) => {setTitle(event.target.value)}}
          placeholder='Title'></input><br></br><br></br>
          <input type="text" value={menu} 
              onChange={(event) => {setMenu(event.target.value)}}
          
          placeholder='Menu item Description'></input><br></br><br></br>
          <input type="number" value={price} 
              onChange={(event) => {setPrice(parseInt(event.target.value))}}
          
          placeholder='Price in USD' ></input>
          </div><br></br>
          <button
              onClick={()=> {
                
                if(editItem.expenseId === ""){
                  setTitle([...title,{
                    expenseId: generateRandomString(30),
                    item: menu,
                    price:price
                  }])
                } else {
                  updateState();
                }

                
              }}
              className="text-white bg-blue-400 hover:bg-blue-600 p-3 text-xl"
              
            >
              {editItem.expenseId ==="" ? '+' : 'Update'}
            </button>
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