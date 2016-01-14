import React from 'react';
import MarkdownContent from './components/MarkdownContent';
import HTMLContent from './components/HTMLContent';
import marked from 'marked';

export default class Editor extends React.Component {
    constructor(props) {
        super(props);
        var helloMessage = "# welcome to MyEditor"
        this.state = {
            helloMessage: helloMessage,
            convertedHTML: marked(helloMessage)
        }
    }

	render() {
		return (
			<div>
				<h1>Editor!!</h1>
                <div>
                    {/* <MarkdownContent 
                        helloMessage={this.state.helloMessage} 
                        onChange={this.handleMarkdownContentChange.bind(this)} 
                    /> */}
                    <HTMLContent />
                </div>
			</div>
		);
	}

    handleMarkdownContentChange(e) {
        var converted = marked(e.target.value);
        console.log(e, converted);
        this.setState({convertedHTML: converted})
    }
}

