import React from 'react';
import addItem from '../img/addItem.png'
import Location from '../img/Location.png'
import Money from '../img/money.png'
import HappyFace from '../img/happiness.png'
import SadFace from '../img/sadness.png'
import NoThatHappyFace from '../img/nosohappy.png'
import Emoji from './Emojis'

class Card extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            opened: true,
        };
    }
    rating(int){
        if(int > 7){
            return <Happiness happyRating={int}/>
        }
        else if(int >= 4 && int <= 7){
            return <NoSoHappy happyRating={int}/>
        }
        else if (int < 4){
            return <Sad happyRating={int}/>
        }
    }

    handleClick(test, e){
        this.setState({ render: test })
    }

    _renderCard(){
        switch (this.state.render) {
            case 'addItem': return <AddItem />
            default: return <CreateItem />
        }
    }

    render(){
        const isDefault = this.props.isDefault;
        if (isDefault) {
            return (
                <div className="item_card" onClick={this.handleClick.bind(this, 'addItem')}>
                    
                    {this._renderCard()}
                </div >
            );
        }
        else {
                return (
                    <div className="item_card">
                        <div className="itemHeader">
                            <img src={this.props.photo} className="rounded-circle item_picture" alt="Item"/>
                            <h1>{this.props.item}</h1>
                        </div>
                        <div className="itemBody">
                            <div className="itemSection"><img src={Location}/><p>{this.props.store}</p></div>
                            <div className="itemSection"><img src={Money}/><p>{this.props.price}</p></div>
                            {this.rating(this.props.happiness)}
                        </div>
                    </div >
                );
        }
    }
}

class Happiness extends React.Component {
    render() {
        return (
            <div className="itemSection"><img src={HappyFace}/><p>{this.props.happyRating}</p></div>
        );
    }
}

class NoSoHappy extends React.Component {
    render() {
        return (
            <div className="itemSection"><img src={NoThatHappyFace}/><p>{this.props.happyRating}</p></div>
        );
    }
}

class Sad extends React.Component {
    render() {
        return (
            <div className="itemSection"><img src={SadFace}/><p>{this.props.happyRating}</p></div>
        );
    }
}

class CreateItem extends React.Component {
    render(){
        return (
            <div className="default itemBody">
                <img src={addItem} className="addItem"/>
            </div>
        )
    }
}

class AddItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            formControls: {
                item: {
                    value: ''
                },
                store: {
                    value: ''
                },
                price: {
                    value: ''
                },
                happinessLevel: {
                    value: ''
                }

            }
        };
    }

    clickHandler = level => {
        this.setState({
            formControls: {
                ...this.state.formControls,
                happinessLevel: level
            }
        })

        console.log(level);
    }

    changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
        
        this.setState({
            formControls: {
                ...this.state.formControls,
                [name]: {
                    ...this.state.formControls[name],
                    value
                }
            }
        })
    }


    render() {
        return (
                <div className="form itemBody">
                    <form>
                        <input type="text" placeholder="Item name" name="item" value={this.state.formControls.item.value} onChange={this.changeHandler}/>
                        <input type="text" placeholder="Store/Brand" name="store" value={this.state.formControls.store.value} onChange={this.changeHandler}/>
                        <input type="number" placeholder="Price" name="price" value={this.state.formControls.price.value} onChange={this.changeHandler}/>
                        <p className="happyQuestion">How do you feel about it?</p>
                        <div className="emojiList">
                            <button type="button" className="test" onClick={() => {this.clickHandler(10)}}>Wow! <Emoji symbol="🤤" label="Wow!"/></button>
                            <button type="button" onClick={() => {this.clickHandler(7)}}>Mmm <Emoji symbol="🙂" label="Mmm"/></button>
                            <button type="button" onClick={() => {this.clickHandler(5)}}>Hmm <Emoji symbol="🤔" label="Hmm"/></button>
                            <button type="button" onClick={() => {this.clickHandler(3)}}>Meh <Emoji symbol="😒" label="Meh"/></button>
                            <button type="button" onClick={() => {this.clickHandler(1)}}>Puf <Emoji symbol="😤" label="Puf"/></button>
                        </div>
                        <button className="confirmButton">Confirm</button>
                    </form>
                </div>
        );
    }
}

export default Card;