import React from 'react';

export default class TextArea extends React.Component {
    constructor (props) {
        super(props);
        // this.state = {
        //     text: this.props.helloText
        // }
    }

    render() {
        return (
            <div>
                <textarea 
                    onInput={this.props.onTextChange}
                    ref={(ref) => this.textarea = ref}/>
            </div>
        );
    }

    componentDidMount() {
        this.textarea.value = this.props.helloText;
    }
}
