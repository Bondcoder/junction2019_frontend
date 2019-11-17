import React from 'react';
import Card from './Card'
import Purchases from './Purchases'
import Analytics from './Analytics'

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: true,
        };
    }

    handleClick(compName, e) {
        this.setState({ render: compName });

    }

    _renderSubcomponent() {
        switch (this.state.render) {
            case 'analytic': return <Analytic />
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
                        <li onClick={this.handleClick.bind(this, 'items')}>Items</li>
                        <li onClick={this.handleClick.bind(this, 'purchases')}>Purchases</li>
                        <li onClick={this.handleClick.bind(this, 'analytic')}>Analytics</li>
                        <li onClick={this.handleClick.bind(this, 'settings')}>Settings</li>
                        <li onClick={this.handleClick.bind(this, 'help')}>Help</li>
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

class Analytic extends React.Component {
    render() {
        return (
            <div className="analyticItems">
                <Analytics />
                <Analytics />
            </div>
        );
    }
}

class Settings extends React.Component {
    render() {
        return (
            <div className="comingSoonSection">
                <p>Coming soon...</p>
            </div>
        );
    }
}

class Help extends React.Component {
    render() {
        return (
            <div className="comingSoonSection">
                <p>Coming soon...</p>
            </div>
        );
    }
}

export default Options;
