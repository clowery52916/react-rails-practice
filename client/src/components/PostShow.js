import React, { Component } from 'react';
import axios from 'axios'
import { Button } from 'semantic-ui-react'

class PostShow extends Component {
    state = {
        city: {},
        post: {},
        deleteToggle: false
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

    deleteToggle = () => {
        this.setState({ deleteToggle: !this.state.deleteToggle})
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
                <Button onClick={this.deleteToggle}>Delete this shit</Button>
                {this.state.deleteToggle? (
                    <div>
                        <p>Are you sure you want to delete?</p>
                        <Button>Yes</Button>
                        <Button>No</Button>
                    </div>
                ): null}
            </div>
        );
    }
}

export default PostShow;