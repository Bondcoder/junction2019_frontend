import React from 'react';
import Card from './Card'

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: true,
        };
    }

    handleClick(compName, e) {
        console.log(compName);
        this.setState({ render: compName });

    }

    _renderSubcomponent() {
        switch (this.state.render) {
            case 'analytics': return <Analytics />
            case 'settings': return <Settings />
            case 'help': return <Help />
            default: return <Items />
        }
    }

    render() {
        return (
            <div className="customizablePanel">
                <div id="dashboard_options">
                    <ul>
                        <li onClick={this.handleClick.bind(this, 'items')}>Items</li>
                        <li onClick={this.handleClick.bind(this, 'analytics')}>Analytics</li>
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
