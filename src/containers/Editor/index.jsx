import React from 'react';
import MarkdownEditor from './MarkdownEditor';

export default class Editor extends React.Component {
    render() {
        return (
            <div>
                <h1>Editor</h1>
                <MarkdownEditor />
            </div>
        );
    }
}
