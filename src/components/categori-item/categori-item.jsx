import React from 'react';
import "./categori-item.scss"

const CategoriItem = ({Item}) => {

    const {name,price,imageUrl}=Item;

    const additem = ()=>{};
    return (
        <div>
            <div className='categories_crad'>
            <div className="image_container">
            <img src={imageUrl} alt={`${name}`} />
            </div>
            <div className="details">
            <span>{name}</span>
            <span>${price}</span>
            </div>
            <button onClick={additem}>BUY NOW</button>
        </div>
        </div>
    );
}

export default CategoriItem;
