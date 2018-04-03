import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Image, Card } from 'semantic-ui-react'
import styled from 'styled-components'


const ImageContainer = styled.img`
    max-width: 60vw;
    border-radius: 6px;
    image-orientation: center;
    flex-basis: auto;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, .5);
    margin-bottom: 20px;
`;
const CityContainer = styled.div`
  text-align: center;
  overflow-y: scroll;
  overflow-x:
   hidden;
   h3{
     font-style: italic;
   }
`;

const LinkContainer = styled.div `
  font-size: 20px;

  a {
      color: #EAEAEA;
  }
`

const CityCard = styled.div`
  border: 1px solid #EAEAEA;
  background: #151515;
  width: 80vw;
  margin: auto;
`






class CityList extends Component {
  state = {
    error: '',
    cities: []
  }

  componentDidMount() {
    this.getAllCities()
  }

  getAllCities = async () => {
    try {
      const res = await axios.get('/api/cities')
      const city = res.data
      this.setState({cities: city})
    } catch (err) {
      console.log(err)
      await this.setState({error: err.message})
      return err.message
    }
  }

  render() {
    if (this.state.error) {
      return <div>{this.state.error}</div>
    }
    return (
      <CityContainer>
        <br/>
      <h1>“The World Is Not Enough” - James Bond</h1>

      <h3>So go out and Explore</h3>
        <CityCard>
      {console.log(this.state.cities)}
      { this.state.cities.map(city => (<div key={city.id}>
          <br/>
          <LinkContainer>
          <Link to={`/cities/${city.id}`}>
            <h1>{city.name}</h1>
            <br/>
          <ImageContainer src={city.img}/>
          </Link>
          <hr/>
          </LinkContainer>
        </div>))
      }
      </CityCard>
    </CityContainer>);

  }
}

export default CityList;