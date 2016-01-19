import React from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router';
import Post from '../../components/Post';

class Blog extends React.Component {
    render() {
        const { dispatch, posts, push } = this.props;
        return (
            <div>
                <h1>Blog</h1>
                <button onClick={() => dispatch(push('/editor'))}>Post</button>
                <ul>
                    {this.props.posts.map((post) => {
                        return <Post key={post.id}/>
                    })}
                </ul>
            </div>
        );
    }
}

Blog.defaultProps = { posts: [{id: 1}, {id : 2}] };

function select(state) {
    return {
        posts: state.posts,
        push: routeActions.push
    }
}

export default connect(select)(Blog);