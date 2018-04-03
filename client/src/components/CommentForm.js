import React, {Component} from 'react';
import {Form, Input} from 'semantic-ui-react'
import axios from 'axios'

class CommentForm extends Component {
  state = {
    new: {
      title: '',
      comment: ''
    }
  }

  handleChange = (event) => {
    const name = event.target.name
    const newPost = {
      ...this.state.new
    }
    newPost[name] = event.target.value
    this.setState({new: newPost})
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const cityId = this.props.cityId
    const payload = this.state.new
    const response = await axios.post(`/api/cities/${cityId}/posts`, payload)
    console.log(response.data)
    const posts = [
      ...this.state.new,
      response.data
    ]
    this.setState({new: posts})
    await this.props.getPost(cityId)
  }

  render() {
    return (<div>
      <Form onSubmit={this.handleSubmit}>
        <label>title</label>
        <Input placeholder="title" onChange={this.handleChange} type="text" name="title" required="required" value={this.state.title}/>
        <div>
          <label>comment</label>
          <textarea placeholder="comment" onChange={this.handleChange} type="text" name="comment" require="require" value={this.state.comment}/>
          <div>
            <button>Submit</button>
          </div>
        </div>

      </Form>
    </div>);
  }
}

export default CommentForm;
