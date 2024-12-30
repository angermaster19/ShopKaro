import React from "react";
import "./Card2.css"; // Import the CSS file

export function Card2({id,title,description}) {
    const deleteItem = ()=>{
        localStorage.removeItem(id)
    }
    return (
        <>
            <div className="card2">
                <h3 className="card2__title">{title}</h3>
                <p className="card2__content">
                    {description}
                </p>
                <div className="card2__date">April 15, 2022</div>
                <div className="card2__arrow">
                    <button className="text-white" onClick={deleteItem}><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        </>
    );
}
