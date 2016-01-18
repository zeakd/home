import React from 'react';

export default class HTMLPreview extends React.Component {
    render() {
        return (
            <span dangerouslySetInnerHTML={{__html: this.props.compiledHTML}} />
        );
    }
}
