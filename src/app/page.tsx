'use client';
import React, { useState, useEffect, ChangeEvent } from 'react';
import { IExpense } from '../../.next/types/menu';
import {generateRandomString } from '../../.next/utils/stingMethods';


export default function Home(this: any) {
  const [titles, setTitles] = useState<IExpense[]>([]);
  const [titleName,setTitleName] = useState("");
  const [menu,setMenuName] = useState("");
  const [menuCategory,setMenuCategory] = useState("");
  const [price,setTitlePrice] = useState(0);
  const [editTitle,setEditTitle] = useState<IExpense>({
    expenseId:"",
  title: "",
  menu:"",
  menuCategory:"",
  price: 0
  });


  const add = () =>  {
    let editItemIndex = -1;
    for (let index = 0; index < titles.length; index++) {
      const element = titles[index];
      if(element.expenseId === editTitle.expenseId){
        editItemIndex = index;
        break;
      }
    }
    let newArray = titles;
    newArray[editItemIndex] = {
      expenseId: editTitle.expenseId,
      title: titleName,
      menu: menu,
      menuCategory: menuCategory,
      price: price
      
  }
  setTitles(newArray);

};
   
const update = (index: any) => (e: {target: {title: any; menu: any; menuCategory: any; price: any;};})=>{
  const list = titles.map((title, i)=> {
    if(index===i){
      return {...title, menu, menuCategory, price: i};
    }else{
      return title;
    }
  });
  setData(list);
};

const remove = (expenseId:string) =>{
  let localTitle = [];
  for (let index = 0; index < titles.length; index++){
    const element = titles[index];
    if(element.expenseId !== expenseId){
      localTitle.push(element);
    }
  }
  setTitles(localTitle);
};


const options = () => {
  const [selected, setSelected] = useState('');
};

  return (
       <div className="grid grid-cols-2 gap-4 p-4 items-center text-black bg-black h-screen">
        <div className='bg-red-600 flex flex-col space-y-2 p-4 rounded-md'> 
          
            <input
              value={titleName}
              onChange={(event) => {setTitleName(event.target.value)}}
              className="w-full h-12 p-4"
              type="text"
              placeholder="Title"
            />
             <input
              value={menu}
              onChange={(event) => {setMenuName(event.target.value)}}
              className="w-full h-12 p-4"
              type="text"
              placeholder="Menu"
            />
            
            
            <select
            className='w-full h-12 p-4'
            value={menuCategory}
            onChange = {(event) => {setMenuCategory(event.target.value)}}
            typeof='text'
            >
        <option disabled={true} value="">
          --Choose Order--
        </option>
            <option>Greens</option>
            <option>Fruits</option>
            <option>Meat</option>
            <option>Bakeries</option>
            </select>



            <input
            value={price}
              className="w-full h-12 p-4"
              type="number"
              onChange={(event) => {setTitlePrice(parseInt(event.target.value))}}
              placeholder="Enter Price"
            />
            
            <button
              onClick={()=> {
                
                if(editTitle.expenseId === ""){
                  setTitles([...titles,{
                    expenseId: generateRandomString(30),
                    title: titleName,
                    menu: menu,
                    menuCategory: menuCategory,
                    price: price
                  }])
                } else {
                  add();
                }

                
              }}
              className="text-white bg-blue-600 hover:bg-red-400 p-4 my-2 border-box:40px text-xl"
              
            >
              {editTitle.expenseId ==="" ? '+' : 'Update'}
            </button>
           
            </div>

            <div className='bg-blue-600 rounded-md'>
            <ul>
            {titles.map((title) => (
              <li
                key={title.expenseId}
                className="my-4 w-full flex justify-between rounded-md bg-red-600"
              >
                <div className="p-4 w-full flex justify-between rounded-md">
                  <span className="capitalize">{title.title}<br></br>{title.menu}<br></br>{title.menuCategory}</span>
                  <span>${title.price}</span>
                </div>

                <div className="flex justify-between">
                  <button className='p-4 border-l-2 border-blue-600 w-16'
                  onClick={()=>{
                    remove(title.expenseId);
                  }}
                  >
                    X
                  </button>
                  <div className='grid grid-cols-2'>

                  <button className='p-4 border-l-2 border-blue-600 w-16'
                  onClick = {() =>{
                    if(editTitle.expenseId === ""){
                      setTitles([...titles,{
                        expenseId: generateRandomString(30),
                        title: '',
                        menu: '',
                        menuCategory: '',
                        price: 0
                      }])
                    } else {
                      update(setData);
                    }

                  }}
                  >
                    Update
                  </button>
                  </div>  
                </div>          
              </li>
            ))}
          </ul>
            </div>
      </div>  
);
  };
function setData(list: (IExpense | { menu: string; MenuCategory: string; price: number; expenseId: string; title: string; menuCategory: string; })[]) {
  throw new Error('Function not implemented.');
}


