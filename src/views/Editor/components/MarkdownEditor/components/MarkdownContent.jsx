import React from 'react';
import ReactDOM from 'react-dom';

export default class MarkdownContent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            content: this.props.helloMessage
        }
        this.history = [this.state.content];
    }
    render() {
        return (
            <div>
                <span 
                    contentEditable 
                    onKeyUp={this.emitChange.bind(this)}
                    onKeyDown={this.handleKeyDown.bind(this)}
                    onPaste={this.handlePaste.bind(this)}
                    dangerouslySetInnerHTML={{__html: this.state.content}}
                />
            </div>
        );
    }

    emitChange() {
        let dom = ReactDOM.findDOMNode(this);
        let lastHTML = this.history[this.history.length - 1];
        let innerHTML = dom.firstElementChild.innerHTML;
        if (lastHTML !== innerHTML) {
            this.history.push(innerHTML);
            this.props.onChange({
                target: {
                    value: innerHTML.replace(/(?:\r\<br\>|\r|\<br\>)/g, '\n')
                }
            })
        }
    }

    handleKeyDown(e) {
        console.log(e)
        if (e.metaKey && e.keyCode === 90) {
            this.history.pop();
            let content = this.history[this.history.length - 1];
            this.setState({content});
            this.emitChange();
        }
    }

    handlePaste(e) {
        console.log("paste", e);
        for(let i = 0; i < e.clipboardData.items.length; ++i) {
            let item = e.clipboardData.items[i];
            item.getAsString(string => {
                console.log("pasted", string);
                this.setState({content :  string.split("\n").join("<br>")});
                this.emitChange();
            })
        }
        e.preventDefault();
    }
}