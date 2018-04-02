import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";
import GridExampleCelled from "./GridExampleCelled";

const LandingImage = styled.div`
  background-image: url("https://images.unsplash.com/photo-1483153597167-15375b89a20e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4c58a71f3c71525ceea94ee24c7d899e&auto=format&fit=crop&w=1053&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  display: flex;
`;
const HomeContainer = styled.div`
  text-align: center;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const LandingText = styled.div`
  margin: auto;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  color: white;
  border-radius: 10px;

  LandingText.h1 {
    font-size: 40px;
  }
`;
const ButtonPadding = styled.div`
  margin: 5px;
`;
const BodyContent = styled.div`
  width: 75vw;
  height: 100vh;
  text-align: center;
  margin: 20px auto;
`;

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <LandingImage>
          <LandingText>
            <h1>Vagabond</h1>
            <p>
              If Trump Ipsum weren’t my own words, perhaps I’d be dating it.{" "}
              <br />I was going to say something extremely rough to Lorem Ipsum,<br />{" "}
              to its family, and I said to myself, "I can't do it. <br /> I just
              can't do it. It's inappropriate. It's not nice."
            </p>
            
            <ButtonPadding>
              <Button type="submit">Sign Up</Button>
            </ButtonPadding>
            <ButtonPadding>
              <Button type="submit">Log In</Button>
            </ButtonPadding>
          </LandingText>
        </LandingImage>

        <BodyContent>
          <GridExampleCelled />
        </BodyContent>
      </HomeContainer>
    );
  }
}

export default Home;
