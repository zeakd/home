import React from 'react';
import SortableComponent from '../../../../shared/SortableComponent';

export default class Tags extends SortableComponent {
    constructor(props) {
        super(props);
        this.sortableOptions = Object.assign(this.sortableOptions, {
            group: {
                name: "tags",
                put: false,
                pull: 'clone'
            }
        })
        this.state = {
            items: [{
                type: 'h1',
                value: 'h1 block'
            }, {
                type: 'h2',
                value: 'h2 block'
            }, {
                type: 'p',
                value: 'paragraph'
            }]
        }
    }

    handleRemove(e) {
        // console.log("tags removed!", e, this)
    }

    handleMove(e) {
        // console.log("tags moved!", e, this);
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
        );
    }
}
