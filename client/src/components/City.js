import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import CommentForm from "./CommentForm";
import styled from "styled-components";

const PageWrapper = styled.div`
  text-align: center;
`;

const ImageContainer = styled.div`
    margin-top: 20px;
`

const ImageStyle = styled.img`
    height: 80vh;
  width: 80vw;
`;

const CityContainer = styled.div`
    width: 75vw;
    border: 1px solid black;
    margin: 20px auto;
    padding: 20px;
`

const Flex = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
padding: 10px;
`

const CardStyle = styled.div`
margin: 5px;
`

const BlackDiv = styled.div`
height: 200px;
width: 200px;
background: rgba(0, 0, 0, .5);
`

class City extends Component {
  state = {
    city: {},
    post: [],
    commentForm: false,
    button: true,
    error: ""
  };
  componentWillMount() {
    const cityId = this.props.match.params.id;
    this.getCity(cityId);
    this.getPost(cityId);
  }

  getPost = async cityId => {
    try {
      const res = await axios.get(`/api/cities/${cityId}/posts`);
      await this.setState({
        post: res.data
      });
    } catch (err) {
      console.log(err);
      await this.setState({ error: err.message });
    }
  };

  getCity = async cityId => {
    try {
      const cityRes = await axios.get(`/api/cities/${cityId}`);
      await this.setState({
        city: cityRes.data
      });
    } catch (err) {
      console.log(err);
      await this.setState({ error: err.message });
    }
  };

  toggleCommentForm = () => {
    this.setState({ commentForm: !this.state.commentForm });
    this.setState({ button: !this.state.button})
  };

  render() {
    return (
      <PageWrapper>
          <ImageContainer>
            <ImageStyle src={this.state.city.img} />
          </ImageContainer>
        <CityContainer>
          <div>
            <h1>{this.state.city.name}</h1>
          </div>
          <div>{this.state.city.description}</div>
        </CityContainer>
        {this.state.button? (<div><Button onClick={this.toggleCommentForm}>Write a comment!</Button></div>) : null }
        
        {this.state.commentForm ? (
          <CommentForm cityId={this.state.city.id} getPost={this.getPost}
          toggleCommentForm={this.toggleCommentForm} />
        ) : null}
        <Flex>
        {this.state.post.map(p => (
            <CardStyle>
          <Card>
              <div key={p.id}>
                <Link to={`/cities/${this.state.city.id}/posts/${p.id}`}>
                  {p.title}
                </Link>
              </div>
              <div>{p.comment}</div>
          </Card>
          </CardStyle>
        ))}
        </Flex>
      </PageWrapper>
    );
  }
}

export default City;
