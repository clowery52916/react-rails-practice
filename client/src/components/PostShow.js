import React, { Component } from 'react';
import axios from 'axios'
import { Button } from 'semantic-ui-react'

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

    // deletePost = async () => {
    //     const postId = this.props.match.params.id
    //     await axios.delete(`/api/cities/`)
    // }

    render() {
        return (
            <div>
                <h1>Hey whaddup, this is a new page that i am testing. thank you for being here.</h1>
                <div>{this.state.post.title}</div>
                <div>{this.state.post.comment}</div>
                <Button>Delete this shit</Button>
            </div>
        );
    }
}

export default PostShow;