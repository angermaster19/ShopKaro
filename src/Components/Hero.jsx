import React from "react";
import { useNavigate } from "react-router-dom";

export function Hero(){
  const navigate = useNavigate()
  const shop = ()=>{
    navigate("/shop")
  }

  const dashboard = ()=>{
    navigate("/dashboard")
  }
    return(
        <>
         <div className="container mx-auto flex flex-col items-center justify-center rounded-md bg-white">
        <section className="flex flex-col text-center">
          <h1 className="max-w-xl text-6xl mt-5 line-clamp-3 font-bold text-black">
            Sell More Earn More with ShopKaro
          </h1>
          <p className="text-xl mt-10 text-gray-600">
            Beautiful Doodles to Tell Your Story
          </p>
        </section>
  
        {/* button section  */}
        <section className=" flex justify-around mt-3">
          <button className="mx-1 flex items-center justify-center rounded-lg bg-indigo-600 text-white  px-8 py-3 text-lg " onClick={shop}>
            Shop
          </button>
          <button className="mx-1 flex items-center justify-center rounded-lg border border-black px-8 py-3 text-lg  text-black " onClick={dashboard}>
            Dashboard
          </button>
        </section>
  
        <div>
          <img
            src="https://img.freepik.com/free-vector/we-are-open-concept-illustration_114360-9847.jpg?t=st=1735520281~exp=1735523881~hmac=abad55e59218fec10f004459bc542b934f6674953bce1b86b8c20f0365df80bf&w=1060"
            alt="image"
            width="100%"
            height="100%"
          />
        </div>
      </div>
        </>
    )
}
