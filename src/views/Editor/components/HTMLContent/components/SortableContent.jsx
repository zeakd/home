import React from 'react';
import SortableComponent from '../../../../shared/SortableComponent';

export default class SortableContent extends SortableComponent {

    constructor(props) {
        super(props);
        this.sortableOptions = Object.assign(this.sortableOptions, {
            group: {
                name: "editor-content",
                put: ['tags']
            }
        })
        this.state = {
            items: [
                {'type': 'h1', value: 'hello'}, 
                {'type': 'h2', value: 'hi'}
            ]
        }
    }

    handleAdd(e) {
        // console.log('added!', e, this);
    }

    handleRemove(e) {
        // console.log('removed!', e, this);
    }

    render() {
        return (
            <div>
                {this.state.items.map(item => {
                    switch(item.type) {
                        case 'h1': return <h1 data-type={item.type}>{item.value}</h1>;
                        case 'h2': return <h2 data-type={item.type}>{item.value}</h2>;
                        case 'p' : return <p data-type={item.type}>{item.value}</p>;
                        default: return null;
                    }
                })}
            </div>
        )
    }
    componentDidMount() {
        super.componentDidMount(...arguments);
    }
}
