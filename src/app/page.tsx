'use client';
import { title } from 'process';
import React, { useState, useEffect } from 'react';
import { text } from 'stream/consumers';
import { IExpense } from '../../.next/types/menu';
import {generateRandomString } from '../../.next/utils/stingMethods';





export default function Home() {
  const [titles, setTitles] = useState<IExpense[]>([]);
  const [titleName,setTitleName] = useState("");
  const [menu,setMenuName] = useState("");
  const [MenuCategory,setMenuCategory] = useState("");
  const [Price,setTitlePrice] = useState(0);
  const [editTitle,setEditTitle] = useState<IExpense>({
    ExpenseId:"",
  title: "",
  menu:"",
  menuCategory:"",
  price: 0
  });


  const updateState = () =>  {
    let editItemIndex = -1;
    for (let index = 0; index < titles.length; index++) {
      const element = titles[index];
      if(element.ExpenseId === editTitle.ExpenseId){
        editItemIndex = index;
        break;
      }
    }
    let newArray = titles;
    newArray[editItemIndex] = {
      ExpenseId: editTitle.ExpenseId,
      title: titleName,
      menu: menu,
      menuCategory: MenuCategory,
      price: Price
      
  }
  setTitles(newArray);

};

  return (
       <div className="grid grid-cols-4 items-center text-black">
        <div className='bg-red-600 '>
          <br></br><br></br>
            <input
              value={titleName}
              onChange={(event) => {setTitleName(event.target.value)}}
              className="col-span-3 p-3 border mx-10"
              type="text"
              placeholder="Title"
            /><br></br>
             <input
              value={menu}
              onChange={(event) => {setMenuName(event.target.value)}}
              className="col-span-3 p-3 border mx-10"
              type="text"
              placeholder="Menu"
            /><br></br>
             <input
              value={MenuCategory}
              onChange={(event) => {setMenuCategory(event.target.value)}}
              className="col-span-3 p-3 border mx-10"
              type="text" 
              placeholder="Select Menu Category"
            /><br></br>
            <input
            value={Price}
              className="col-span-3 p-3 border mx-10"
              type="number"
              onChange={(event) => {setTitlePrice(parseInt(event.target.value))}}
              placeholder="Enter Price"
            />
            
            <button
              onClick={()=> {
                
                if(editTitle.ExpenseId === ""){
                  setTitles([...titles,{
                    ExpenseId: generateRandomString(30),
                    title: titleName,
                    menu: menu,
                    menuCategory: MenuCategory,
                    price: Price
                  }])
                } else {
                  updateState();
                }

                
              }}
              className="text-white bg-blue-600 hover:bg-red-400 p-4 my-2 border-box:40px text-xl"
              
            >
              {editTitle.ExpenseId ==="" ? '+' : 'Update'}
            </button>
            <br></br>
            </div>
            <div className='bg-blue-600 '>
            <ul>
            {titles.map((title, id) => (
              <li
                key={id}
                className="my-4 w-full flex justify-between bg-red-600"
              >
                <div className="p-4 w-full flex justify-between">
                  <span className="capitalize">{title.title}<br></br>{title.menu}<br></br>{title.menuCategory}</span>
                  <span>${title.price}</span>
                </div>
              
              </li>
            ))}
          </ul>
            </div>
            
   
      </div>
    

    
);
  };