import React from 'react'
import { Cards, Chart, Country } from './components'
import Styles from './App.module.css'
import fetchData from './api'
import image from "./images/coviid19.jpg"

export default class App extends React.Component {
    state = {
        data: {},
        country: ""
    }




    async componentDidMount() {
        let response = await fetchData(this.state.country)
        this.setState({ data: response })
    }

    handleCountryChange = async (countrySelected) => {

        const response = await fetchData(countrySelected)

        this.setState({ data: response, country: countrySelected })

    }

    render() {

        const { data, country } = this.state

        return (

            <div className={Styles.container}>
                <img src={image} alt="COVID-19" style={
                    {

                        height: '180px'
                    }
                } />
                <Cards data={data} />
                <Country changer={this.handleCountryChange} />
                <Chart data={data} country={country} />

            </div>

        )
    }
}