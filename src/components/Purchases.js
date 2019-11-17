import React from 'react';

class Purchases extends React.Component {
    render() {
        return (
            <tr>
                <th className="data">{this.props.date}</th>
                <th className="data">{this.props.company}</th>
                <th className="data">{this.props.price}</th>
                <th><button className="addData">Add</button></th>
            </tr>
        )
    }
}

export default Purchases;