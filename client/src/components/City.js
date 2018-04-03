import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'
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
    this.getPost(cityId)
  }

  getPost = async (cityId) => {
    try {
      const res = await axios.get(`/api/cities/${cityId}/posts`)
      await this.setState({post: res.data})
    } catch (err) {
      console.log(err)
      await this.setState({error: err.message})
    }
  }

  getCity = async (cityId) => {
    try {
      const cityRes = await axios.get(`/api/cities/${cityId}`)
      const postRes = await axios.get(`/api/cities/${cityId}/posts`)
      await this.setState({city: cityRes.data})
    } catch (err) {
      console.log(err)
      await this.setState({error: err.message})
    }
  }

  toggleCommentForm = () => {
    this.setState({
      commentForm: !this.state.commentForm
    })
  }

  render() {
    return (<div>
      <h1>{this.state.city.name}</h1>

      <br/>
      <img src={this.state.city.img}/> <br/>
      {this.state.city.description}
      <br/>
      <br/>

      <Button onClick={this.toggleCommentForm}>Write a comment!</Button>
      {

        this.state.commentForm
          ? (<CommentForm cityId={this.state.city.id} getPost={this.getPost}/>)
          : null
      }
      {
        this.state.post.map(p => (<div>
          <div key={p.id}>
            <br/>
            <Link to={`/cities/${this.state.city.id}/posts/${p.id}`}>{p.title}</Link>
          </div>
        <br/>
          <div>{p.comment}</div>
        </div>))
      }
    </div>);
  }
}

export default City;
