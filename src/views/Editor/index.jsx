import React from 'react';
// import MarkdownContent from './components/MarkdownContent';
// import HTMLContent from './components/EditableHTMLContent';
// import HTMLContent from './components/HTMLContent';
import MarkdownEditor from './components/MarkdownEditor';
import Content from '../shared/Content';

export default class Editor extends React.Component {
    constructor(props) {
        super(props);
    }

	render() {
		return (
			<div>
				<h1>Editor!!</h1>
                <Content>
                    <MarkdownEditor />
                </Content>
			</div>
		);
	}

    // handleMarkdownContentChange(e) {
    //     var converted = marked(e.target.value);
    //     console.log(e, converted);
    //     this.setState({convertedHTML: converted})
    // }
    
}

