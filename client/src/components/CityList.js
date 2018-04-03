import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Image } from 'semantic-ui-react'
import styled from 'styled-components'


const ImageContainer = styled.img`
    max-width: 60vw;
    border-radius: 20px;
    image-orientation: center;

    flex-basis: auto;



`;
const CityContainer = styled.div`
  text-align: center;
  overflow-y: scroll;
  overflow-x:
   hidden;
`;

const LinkContainer = styled.div `
  font-size: 20px;
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
      <h1>View All Cities</h1>
      {console.log(this.state.cities)}
      {
        this.state.cities.map(city => (<div key={city.id}>
          <br/>
          <LinkContainer>
          <Link to={`/cities/${city.id}`}>
            <p>{city.name}</p>
            <br/>
          </Link>
          </LinkContainer>
          {/* <ImageContainer> */}
          <ImageContainer src={city.img}/>
          {/* </ImageContainer> */}
          <br/>
          <br/>

        </div>))
      }
    </CityContainer>);

  }
}

export default CityList;
