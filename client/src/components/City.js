import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import CommentForm from './CommentForm'

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
    }

    getCity = async (cityId) => {
        try {
            const cityRes = await axios.get(`/api/cities/${cityId}`)
            const postRes = await axios.get(`/api/cities/${cityId}/posts`)
            await this.setState({
                city: cityRes.data,
                post: postRes.data
            })
            console.log(postRes.data)
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
                    <CommentForm cityId={this.state.city.id}/>
                ): null }
                {this.state.post.map(p => (
                    <div>
                    <div key={p.id}>
                    <Link to={`/cities/${this.state.city.id}/posts/${p.id}`}>{p.title}</Link>
                    </div>
                    <div>{p.comment}</div>
                    </div>
                ))}
            </div>
        );
    }
}

export default City;