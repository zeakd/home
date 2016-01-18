import React from 'react';

var data = {
    "posts": 
    [
        {
            "title": "Hi. Home.",
            "html": "<h1>리액트 사용하기</h1><br><p>react로 hybrid render를 하는 홈페이지를 만드는게 목적이라, 서버와 클라이언트에서 jsx를 모두 트랜스파일 할 수 있어야한다. 기왕 babel을 쓰는거 es6문법까지 사용해보기로 했다.</p><p>기존의 starter-kit을 많이 보았는데, babel에선 분명 production용으로 babel-node를 사용하지 말라고 권하였는데도 많은 boilerplate들이 babel-node를 사용하고 있었다. 다른 패턴이 없을까 찾던중 https://github.com/gpbl/isomorphic500/blob/master/index.js을 찾았고 마음에 들었다.</p>"
        },
        {
            "title": "Hi. Home.",
            "html": "<h1>리액트 사용하기</h1><br><p>react로 hybrid render를 하는 홈페이지를 만드는게 목적이라, 서버와 클라이언트에서 jsx를 모두 트랜스파일 할 수 있어야한다. 기왕 babel을 쓰는거 es6문법까지 사용해보기로 했다.</p><p>기존의 starter-kit을 많이 보았는데, babel에선 분명 production용으로 babel-node를 사용하지 말라고 권하였는데도 많은 boilerplate들이 babel-node를 사용하고 있었다. 다른 패턴이 없을까 찾던중 https://github.com/gpbl/isomorphic500/blob/master/index.js을 찾았고 마음에 들었다.</p>"
        }
    ]
}

export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

	render() {
		return (
			<div>
				<h1>Blog</h1>
                <ul>
                {this.state.posts.map(() => {
                    return <li>hi</li>
                })}
                </ul>
			</div>
		);
	}

    componentDidMount() {
        this.setState({ posts: data.posts })
    }
}
