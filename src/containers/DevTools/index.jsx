import React from 'react';
import DevTools from './components/DevTools';

export class DevtoolsContainer extends React.Component {
    render() {
        let devTools;
        if (__BROWSER__) {
            devTools = null;
        } else {
            devTools = <DevTools />
        } 

        return (
            {devTools}
        );
    }
    componentDidMount() {
        
    }
}
