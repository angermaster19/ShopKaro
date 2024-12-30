import React, { useState } from "react";
import "./Card.css"; // Ensure styles are imported if using external CSS

export function Card({id,category,title,amount,description,path}) {

    const [filled,setFilled] = useState(false)

    const toggle = ()=>{
        setFilled (!filled)
    }

  return (
    <>
      <div className="max-w-xs p-6 rounded-md bg-black shadow-2xl mx-1 my-1 ">
        <img
          src={`${path}`}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <div className="flex justify-between">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {category} dsf
          </span>
          <span className="block text-sm  font-mono tracking-widest uppercase font-extrabold text-green-600">
            {amount} 
          </span>
          </div>
          <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
        </div>
        <p className="text-white">
          {description}
        </p>
        <div className="flex justify-between mt-5">
            <button className="text-white bg-blue-600 px-2 py-2 rounded-sm">Add to Cart</button>
            <button className={`${filled ?'text-red-600':'text-white'}`} onClick={toggle}><i className={`fa-${filled ? 'solid':'regular'} fa-heart fa-2x`}></i></button>
        </div>
      </div>
    </>
    
  );
}
