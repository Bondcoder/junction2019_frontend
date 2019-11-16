import React from 'react';
import addItem from '../img/addItem.png'
import Location from '../img/Location.png'
import Money from '../img/money.png'

function Card(props) {
    const isDefault = props.isDefault;
    if (isDefault) {
        return (
            <div className="item_card default">
                <div className="itemBody">
                    <img src={addItem} className="addItem"/>
                </div>
            </div >
        );
    }
    else {
        return (
            <div className="item_card">
                <div className="itemHeader">
                    <img src={props.photo} className="rounded-circle item_picture" alt="Item"/>
                    <h1>{props.item}</h1>
                </div>
                <div className="itemBody">
                    <div class="itemSection"><img src={Location}/><p>{props.store}</p></div>
                    <div class="itemSection"><img src={Money}/><p>{props.price}</p></div>
                    <div class="itemSection"><img src={Location}/><p>{props.happiness}</p></div>
                </div>
            </div >
        );
    }
}


export default Card;