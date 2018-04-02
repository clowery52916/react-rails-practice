import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react'

class CommentForm extends Component {
    state = {
        title: '',
        comment: ''
    }
    
    componentDidMount() {
        console.log(this.props.cityId)
    }

    getAllPosts

    handleChange = (event) => {
        const name = event.target.name
        const newState = { ... this.state }
        newState[name] = event.target.value
        this.setState({newState})
    }

    handleSubmit = () => {
        const cityId = this.props.cityId
        console.log(cityId)
    }

    render() {
        return (
            <div>
                <Form>
                    <label>title</label>
                    <Input placeholder="title"
                    onChange={this.handleChange}
                    type="text"
                    name="title"
                    required
                    value={this.state.title}/>
                    <div>
                        <label>comment</label>
                        <textarea placeholder="comment"
                        onChange={this.handleChange}
                        type="text"
                        name="comment"
                        require
                        value={this.state.comment}/>
                        <div>
                    <button>Submit</button>
                    </div>
                    </div>

                </Form>
            </div>
        );
    }
}

export default CommentForm;