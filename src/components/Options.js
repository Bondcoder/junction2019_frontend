import React from 'react';
import Card from './Card'
import Purchases from './Purchases'

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: true,
            active: false,
        };
    }

    handleClick(compName, e) {
        this.setState({ render: compName, active: true });

    }

    _renderSubcomponent() {
        switch (this.state.render) {
            case 'analytics': return <Analytics />
            case 'settings': return <Settings />
            case 'help': return <Help />
            case 'purchases': return <Purchase />
            default: return <Items />
        }
    }

    render() {
        return (
            <div className="customizablePanel">
                <div id="dashboard_options">
                    <ul>
                        <li onClick={this.handleClick.bind(this, 'items')} className={this.state.condition ? "button toggled" : "button"}>Items</li>
                        <li onClick={this.handleClick.bind(this, 'purchases')} className={this.state.condition ? "button toggled" : "button"}>Purchases</li>
                        <li onClick={this.handleClick.bind(this, 'analytics')} className={this.state.condition ? "button toggled" : "button"}>Analytics</li>
                        <li onClick={this.handleClick.bind(this, 'settings')} className={this.state.condition ? "button toggled" : "button"}>Settings</li>
                        <li onClick={this.handleClick.bind(this, 'help')} className={this.state.condition ? "button toggled" : "button"}>Help</li>
                    </ul>
                </div>
                {this._renderSubcomponent()}
            </div>
        )
    }
}

class Items extends React.Component {
    render() {
        return (
            <div className="cardItems">
                <Card isDefault="true" />
                <Card />
                <Card photo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" item="Laptop" store="Apple" price="1799.99" happiness="7.4" />
            </div>
        );
    }
}

class Purchase extends React.Component {
    render() {
        return (
            <tbody className="purchasesTab">
                <Purchases date="12/11/2019" company="Stockman" price="45.40" />
            </tbody>
        );
    }
}

class Analytics extends React.Component {
    render() {
        return (
            <p>Analytics</p>
        );
    }
}

class Settings extends React.Component {
    render() {
        return (
            <p>Settings</p>
        );
    }
}

class Help extends React.Component {
    render() {
        return (
            <p>Help</p>
        );
    }
}

export default Options;
