import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button, Card } from 'semantic-ui-react'
import CommentForm from './CommentForm'
import styled from 'styled-components'

const FlexChild = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap-reverse;
`

class City extends Component {
    state = {
        city: {},
        post: [],
        commentForm: false,
        error: ''
    }
    componentWillMount() {
        const cityId = this.props.match.params.id
        this.getCity(cityId)
        this.getPost(cityId)
    }

    getPost = async (cityId) => {
        try {
            const res = await axios.get(`/api/cities/${cityId}/posts`)
            await this.setState({
                post: res.data
            })
        }
        catch(err) {
            console.log(err)
            await this.setState({error: err.message})
        }
    }

    getCity = async (cityId) => {
        try {
            const cityRes = await axios.get(`/api/cities/${cityId}`)
            await this.setState({
                city: cityRes.data
            })
        }
        catch (err) {
            console.log(err)
            await this.setState({error: err.message})
        }
    }

    toggleCommentForm = () => {
        this.setState({ commentForm: !this.state.commentForm})
    }

    render() {
        return (
            <div>
                <h1>hey</h1>
                {this.state.city.name}
                <img src={this.state.city.img}/>
                {this.state.city.description}

                <Button onClick={this.toggleCommentForm}>Write a comment!</Button>
                {this.state.commentForm ? (
                    <CommentForm cityId={this.state.city.id}
                    getPost={this.getPost}/>
                ): null }
                {this.state.post.map(p => (
                    <FlexChild>
                    <Card> 
                    <div>
                    <div key={p.id}>
                    <Link to={`/cities/${this.state.city.id}/posts/${p.id}`}>{p.title}</Link>
                    </div>
                    <div>{p.comment}</div>
                    </div>
                    </Card>
                    </FlexChild>
                ))}
            </div>
        );
    }
}

export default City;