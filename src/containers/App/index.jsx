import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Header from './components/Header';
import Content from '../../components/Content';
import DevTools from '../DevTools';

class App extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header title="Arty Developer" />
                <Content>
                    {this.props.children}
                </Content>
            </div>
        );
    } 

    componentDidMount() {

    }
}

export default App;