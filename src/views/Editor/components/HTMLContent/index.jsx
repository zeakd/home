import React from 'react';

if (process.env.BROWSER) {
    var SortableContent = require("./components/SortableContent").default;
    var Tags = require('./components/Tags').default;
}

export default class HTMLContent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {renderSource: 'server'};
    }
    render() {
        console.log('render!')
        var sortableContent, tags;
        if (this.state.renderSource === 'browser') {
            sortableContent = <SortableContent />
            tags = <Tags />
        } else {
            sortableContent = null;
            tags = null;
        }
        return ( 
            <div id = "html-content">
                {sortableContent}
                {tags}
            </div>
        );
    }
    componentDidMount() {
        this.setState({renderSource : 'browser'});
    }
}

