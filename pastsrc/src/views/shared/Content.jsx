import React from 'react';
if (process.env.BROWSER) {
    require('./Content.scss');
}

export default class Content extends React.Component {
    render() {
        return (
            <div id='content'>
            {this.props.children}
            </div>
        );
    }
}
