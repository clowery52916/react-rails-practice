import React, { Component } from 'react';
import axios from 'axios'
import { Button } from 'semantic-ui-react'
import EditForm from './EditForm'
class PostShow extends Component {
    state = {
        city: {},
        post: {},
        deleteToggle: false,
        editToggle: false
    }

    componentWillMount() {
        this.getPost()
    }

    getPost = async () => {
        const postId = this.props.match.params.id
        const res = await axios.get(`/api/cities/:city_id/posts/${postId}`)
        // console.log(res.data)
        this.setState({ post: res.data })
    }

    deleteToggle = () => {
        this.setState({ deleteToggle: !this.state.deleteToggle})
    }

    editToggle = () => {
        this.setState({ editToggle: !this.state.editToggle })
    }

    deletePost = async () => {
        const postId = this.props.match.params.id
        const cityId = this.state.post.city_id
        console.log(cityId)
        await axios.delete(`/api/cities/${cityId}/posts/${postId}`)
        this.props.history.push(`/cities/${cityId}`)
    }

    render() {
        return (
            <div>
                <h1>Hey whaddup, this is a new page that i am testing. thank you for being here.</h1>
                <div>{this.state.post.title}</div>
                <div>{this.state.post.comment}</div>
                <Button onClick={this.editToggle}>Edit this shit</Button>
                {this.state.editToggle? (
                    <EditForm cityId={this.state.post.city_id}
                    postId={this.props.match.params.id}/>
                ) : null}
                <Button onClick={this.deleteToggle}>Delete this shit</Button>
                {this.state.deleteToggle? (
                    <div>
                        <p>Are you sure you want to delete this shit?</p>
                        <Button onClick={this.deletePost}>Yes</Button>
                        <Button>No</Button>
                    </div>
                ): null}
            </div>
        );
    }
}

export default PostShow;