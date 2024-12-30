import React from "react";
import { Form } from "./Form";
import { Card } from "./Card";

export function Shop(){
    const keys = Object.keys(localStorage);

    const getInfo = (id)=>{
        const data = JSON.parse(localStorage.getItem(id))
        return data
        
    }
    

    return(
        <>
        {/* <Form /> */}
        <div className="flex flex-row justify-center flex-wrap">
        {keys.map((id) => {
            let data = getInfo(id)
            return(
                
                <Card key={id} // Ensure each component has a unique key
                id={data.id}
                category={data.category}
                title={data.title}
                amount={data.amount}
                description={data.description}
                path={data.image}/>
                
                
            )
            
        })}
        </div>
        
        </>
    )
}