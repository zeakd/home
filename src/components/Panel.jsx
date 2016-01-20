import React from 'react';

export default class Panel extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
