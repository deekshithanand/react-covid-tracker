import Axios from 'axios'

const url = 'https://covid19.mathdro.id/api'
const url2 = "https://api.covid19india.org/data.json" //daily Data for india URL:

export default async function apiFetch(country) {
    let changedURL = country ? `${url}/countries/${country}` : url

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await Axios.get(changedURL)
        const response = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
        // console.log(response)
        return response
    } catch (error) {
        // console.log(error)
        console.log("API ERROR")
    }

}

export const fetchDailyData = async () => {
    try {
        const { data: { cases_time_series } } = await Axios.get(url2)
        const modifiedResponse = cases_time_series.map(({ totalconfirmed, totaldeceased, totalrecovered, date }) => {
            return {
                infected: totalconfirmed,
                death: totaldeceased,
                recovered: totalrecovered,
                date
            }
        })

        return modifiedResponse
    } catch (error) {
        // console.log("Error")
        console.log("API ERROR")
        return null
    }
}

export const Countries = async () => {
    try {
        const response = await Axios.get(`${url}/countries`)
        // console.log(response)
        const modifiedResponse = response.data.countries.map(({ name }) => name)
        return modifiedResponse
    } catch (error) {
        console.log(error)
    }
}