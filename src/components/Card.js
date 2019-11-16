import React from 'react';

function Card(props) {
    const isDefault = props.isDefault;
    if (isDefault) {
        return (
            <div className="item_card default">
                <div className="itemBody">
                    <p>default</p>
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
                    <p>{props.store}</p>
                    <p>{props.price}</p>
                    <p>{props.happiness}</p>
                </div>
            </div >
        );
    }
}


export default Card;