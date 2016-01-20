import React from 'react';
import TextArea from '../../components/TextArea';
import Panel from '../../components/Panel';
import marked from 'marked';
if (__BROWSER__) {
    require('whatwg-fetch');
}


export default class MarkdownEditor extends React.Component {
    constructor (props) {
        super(props);
        this.markdown = this.helloText = "# Welcome to Editor";
        this.state = {
            compiledHTML: marked(this.markdown, {sanitize: true})
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.submit.bind(this)} >
                    Post
                </button>
                <TextArea
                    onTextChange={this.handleTextChange.bind(this)} 
                    helloText={this.helloText}
                />
                <div dangerouslySetInnerHTML={{ __html: this.state.compiledHTML }} />
            </div>
        );
    }

    handleTextChange(e) {
        console.log(e)
        this.markdown = e.target.value;
        this.setState({compiledHTML: marked(this.markdown, {sanitize: true})});
    }

    submit() {
        fetch('/api/posts', { 
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                markdown: this.markdown,
                html: this.state.compiledHTML
            })    
        }).then(data => console.log(data));
    }
}
