import React from 'react'
import { Cards } from './components'
import Styles from './App.module.css'
import fetchData from './api'

export default class App extends React.Component {
        state = {
            data : {}
        }
    
    
    
    async componentDidMount(){
        let response = await fetchData()
        this.setState({data:response}) 
    }

    render() {
        const {data} = this.state
        
        return (
            
            <div className={Styles.container}>
                
                <Cards data={data}/>

            </div>

        )
    }
}