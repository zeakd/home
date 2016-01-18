import React from 'react';
import ReactDOM from 'react-dom';

//http://stackoverflow.com/questions/22677931/react-js-onchange-event-for-contenteditable
export default class MarkdownContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div contentEditable onInput={this.emitChange.bind(this)} onBlur={this.emitChange.bind(this)}>
                {this.props.helloMessage}
            </div>
        );
    }

    emitChange() { 
        var html = ReactDOM.findDOMNode(this).innerHTML;
        if (this.props.onChange && this.html !== this.lastHtml) {
            this.props.onChange({
                target: {
                    value: html
                }
            })
        }
        this.lastHtml = html;    
    }

}
