import React from 'react';
import MarkdownContent from './components/MarkdownContent';
import HTMLPreview from './components/HTMLPreview';
import marked from 'marked';

export default class index extends React.Component {
    constructor (props) {
        super(props);
        this.helloMessage = "# Welcome to My Editor";
        this.state = {
            compiledHTML: marked(this.helloMessage, {sanitize: true, breaks: true})
        }
    }

    render() {
        return (
            <div>
                <MarkdownContent 
                    onChange={this.handleMarkdownChange.bind(this)} 
                    helloMessage={this.helloMessage}
                />
                <HTMLPreview compiledHTML={this.state.compiledHTML}/>
            </div>
        );
    }

    handleMarkdownChange(e) {
        console.log("changed", e.target.value);
        var compiledHTML = marked(e.target.value, {breaks: true, gfm: true});
        this.setState({compiledHTML});
    }
}
