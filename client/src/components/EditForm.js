import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react'

class EditForm extends Component {



    render() {
        return (
            <div>
                {console.log(this.props.cityId)}
                {console.log(this.props.postId)}
                <Form onSubmit={this.handleSubmit}>
                    <Input placeholder="title"/>
                    <textarea placeholder="comment"/>
                    <Button>Save Changes</Button>
                </Form>
            </div>
        );
    }
}

export default EditForm;