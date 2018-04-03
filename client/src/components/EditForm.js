import React, { Component } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import axios from "axios";
import styled from "styled-components";

const FormContainer = styled.div`
  width: 60vw;
  margin: 20px auto;
`;

class EditForm extends Component {
  state = {
    update: {
      title: "",
      comment: ""
    }
  };

  handleChange = event => {
    const target = event.target.name;
    const editedComment = { ...this.state.update };
    editedComment[target] = event.target.value;
    this.setState({ update: editedComment });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const cityId = this.props.cityId;
    const postId = this.props.postId;
    const update = this.state.update;
    const res = await axios.patch(
      `/api/cities/${cityId}/posts/${postId}`,
      update
    );
    console.log(res.data);
    this.props.editToggle();
    this.props.getPost();
  };

  render() {
    return (
      <FormContainer>
        {console.log(this.props.cityId)}
        {console.log(this.props.postId)}
        <Form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label>
          </div>
          <Input
            placeholder="title"
            onChange={this.handleChange}
            type="text"
            name="title"
            required
            value={this.state.title}
          />

          <div>
            <label>Comment</label>
          </div>
          <textarea
            placeholder="comment"
            onChange={this.handleChange}
            type="text"
            name="comment"
            required
            value={this.state.comment}
          />
          <Button>Save Changes</Button>
          <Button onClick={this.props.editToggle}>Cancel</Button>
        </Form>
      </FormContainer>
    );
  }
}

export default EditForm;
