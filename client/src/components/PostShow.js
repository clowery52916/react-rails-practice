import React, { Component } from 'react';
import axios from 'axios'

class PostShow extends Component {
    state = {
        city: {},
        post: {}
    }

    componentWillMount() {
        this.getPost()
    }

    getPost = async () => {
        const postId = this.props.match.params.id
        const res = await axios.get(`/api/cities/:city_id/posts/${postId}`)
        console.log(res.data)
        this.setState({ post: res.data })
    }

    render() {
        return (
            <div>
                <h1>Hey whaddup, this is a new page that i am testing. thank you for being here.</h1>
                {this.state.post.title}
                {this.state.post.comment}
            </div>
        );
    }
}

export default PostShow;