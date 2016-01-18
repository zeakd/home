import React from 'react';
import ReactDOM from 'react-dom';
import sortable from 'sortablejs';

var _nextSibling;
var _activeComponent;
class SortableComponent extends React.Component {
    _handleStart(e) {
        _nextSibling = e.item.nextElementSibling;
        _activeComponent = this;
        
        if (this.handleStart) {
            this.handleStart(e);
        }
        // console.log('start', e);
    }

    _handleEnd(e) {

    }

    _handleAdd(e) {
        var isClone = _activeComponent.sortableOptions.group &&
                    _activeComponent.sortableOptions.group.pull === 'clone';
        if (!isClone) {
            e.from.insertBefore(e.item, _nextSibling);            
        } else {
            e.item.parentElement.removeChild(e.item);
        }

        if(this.state && this.state.items) {
            // console.log("add precess", e)
            var items = this.state.items;
            var newIndex = e.newIndex;

            // delete e.item.dataset.reactid;
            var item = {
                type: e.item.dataset.type,
                value: e.item.innerHTML
            }
            
            items.splice(newIndex, 0, item);
            this.setState({ items });
        }
        if (this.handleAdd) {
            this.handleAdd(e);
        }
    }

    _handleUpdate(e) {
        var isClone = this.sortableOptions.group &&
                    this.sortableOptions.group.pull === 'clone';
        if (!isClone) {
            e.from.insertBefore(e.item, _nextSibling);            
        }

        if (this.state && this.state.items) {
            // console.log("update process");
            var items = this.state.items;
            var oldIndex = e.oldIndex;
            var newIndex = e.newIndex;
            var isClone = this.sortableOptions.group &&
                        this.sortableOptions.group.pull === 'clone';
            items.splice(newIndex, 0, items.splice(oldIndex, 1)[0]);
            
            this.setState({ items });
        }
        if (this.handleRemove) {
            this.handleRemove(e);
        }
    }

    _handleRemove(e) {
        // console.log(this.state, typeof this.state.items);
        if(this.state && this.state.items) {
            // console.log("remove process");
            var items = this.state.items;
            var oldIndex = e.oldIndex;
            // e.from.children.splice(oldIndex, 0, item);
            var isClone = this.sortableOptions.group && 
                        this.sortableOptions.group.pull &&
                        this.sortableOptions.group.pull === 'clone';
            if (!isClone) {
                var item = items.splice(oldIndex, 1)[0];                
            }

            this.setState({ items });
        }
        if (this.handleRemove) {
            this.handleRemove(e);
        }
    }

    _handleSort(e) {

    }

    _handleFilter(e) {

    }

    _handleMove(e) {
        if (this.handleMove) {
            this.handleMove(e);
        }
    }


    constructor(props) {
        super(props);
        this.sortableOptions = {
            ref: 'list',
            model: 'items',
            animation: 100,

            onStart: this._handleStart.bind(this),
            onEnd: this._handleEnd.bind(this),
            onAdd: this._handleAdd.bind(this),
            onUpdate: this._handleUpdate.bind(this),
            onRemove: this._handleRemove.bind(this),
            onSort: this._handleSort.bind(this),
            onFilter: this._handleFilter.bind(this),
            onMove: this._handleMove.bind(this)
        };
    }

    render() {
        return (
            <div></div>
        );
    }

    componentDidMount() {
        var dom = ReactDOM.findDOMNode(this);
        sortable.create(dom, this.sortableOptions);
    }
}
SortableComponent._activeComponent = 'name';
export default SortableComponent;
