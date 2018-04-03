import React, { Component } from 'react';
import axios from 'axios'
import { Button } from 'semantic-ui-react'
import EditForm from './EditForm'
import styled from 'styled-components'

const PostContainer = styled.div`
    text-align: center;
`

class PostShow extends Component {
    state = {
        city: {},
        post: {},
        deleteToggle: false,
        editToggle: false,
        button: true
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
        this.setState({ button: !this.state.button })
    }

    editToggle = () => {
        this.setState({ editToggle: !this.state.editToggle })
        this.setState({ button: !this.state.button})
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
            <PostContainer>
                <div><h1>{this.state.post.title}</h1></div>
                <div><p>{this.state.post.comment}</p></div>
                {this.state.button? (<div><Button onClick={this.editToggle}>Edit</Button></div>) :null}
                
                {this.state.editToggle? (
                    <EditForm cityId={this.state.post.city_id}
                    postId={this.props.match.params.id}
                    getPost={this.getPost}
                    editToggle={this.editToggle}/>
                ) : null}

                {this.state.button? (<Button onClick={this.deleteToggle}>Delete</Button>) :null }
                {this.state.deleteToggle? (
                    <div>
                        <p>Are you sure you want to delete?</p>
                        <Button onClick={this.deletePost}>Yes</Button>
                        <Button onClick={this.deleteToggle}>No</Button>
                    </div>
                ): null}
            </PostContainer>
        );
    }
}

export default PostShow;