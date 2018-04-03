import React, {Component} from 'react';
import {Form, Input, Button} from 'semantic-ui-react'
import axios from 'axios'

class EditForm extends Component {
  state = {
    update: {
      title: '',
      comment: ''
    }
  }

  handleChange = (event) => {
    const target = event.target.name
    const editedComment = {
      ...this.state.update
    }
    editedComment[target] = event.target.value
    this.setState({update: editedComment})
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const cityId = this.props.cityId
    const postId = this.props.postId
    const update = this.state.update
    const res = await axios.patch(`/api/cities/${cityId}/posts/${postId}`, update)
    console.log(res.data)
    this.props.editToggle()
    this.props.getPost()
  }

  render() {
    return (<div>
      {console.log(this.props.cityId)}
      {console.log(this.props.postId)}
      <Form onSubmit={this.handleSubmit}>
        <Input placeholder="title" onChange={this.handleChange} type="text" name="title" required="required" value={this.state.title}/>
        <textarea placeholder="comment" onChange={this.handleChange} type="text" name="comment" required="required" value={this.state.comment}/>
        <Button>Save Changes</Button>
      </Form>
    </div>);
  }
}

export default EditForm;
