import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
            this.setState({ cities: city })
        }
        catch (err) {
            console.log(err)
            await this.setState({ error: err.message })
            return err.message
        }
    }

    render() {
        if (this.state.error){
            return <div>{this.state.error}</div>
        }
        return (
            <div>
                <h1>Whaddup</h1>
                {console.log(this.state.cities)}
                {this.state.cities.map(city => (
                    <div key={city.id}>
                        <Link to={`/cities/${city.id}`}><p>{city.name}</p></Link>
                        <img src={city.img}/>
                    </div>
                ))}
            </div>
        );
    }
}

export default CityList;