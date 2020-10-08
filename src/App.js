import React from 'react'
import { Cards, Chart, Country } from './components'
import Styles from './App.module.css'

export default class App extends React.Component {

    render() {
        return (
            <div className={Styles.container}>
                <h1>
                    APP WOrking~
            </h1>
                <Cards />
                <Chart />
                <Country />
            </div>

        )
    }
}