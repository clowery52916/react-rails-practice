import React, { Component } from 'react';
import axios from 'axios'

class City extends Component {
    state = {
        city: {},
        post: [],
        error: ''
    }
    componentWillMount() {
        const cityId = this.props.match.params.id
        this.getCity(cityId)
    }

    getCity = async (cityId) => {
        try {
            const cityRes = await axios.get(`/api/cities/${cityId}`)
            await this.setState({
                city: cityRes.data
            })
        }
        catch (err) {
            console.log(err)
            await this.setState({error: err.message})
        }
    }
    render() {
        return (
            <div>
                <h1>hey</h1>
                {this.state.city.name}
                <img src={this.state.city.img}/>
                {this.state.description}
                {this.state.post}
            </div>
        );
    }
}

export default City;
