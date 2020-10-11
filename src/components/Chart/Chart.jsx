import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";

import { Line} from "react-chartjs-2";
import styles from "./Chart.module.css";


export default function Chart(props) {
  const [dailyData, setDailyData] = useState([]);

  const dataFromAPI = async () => {
    setDailyData(await fetchDailyData());
    // const response = await fetchDailyData()
    // console.log(response[0])
  };

  useEffect(() => {
    dataFromAPI();
  }, []);

  // dailyData.map(({date}) => String(date))

  const lineChart = dailyData.length ? (
    <Line
      options={{
        title: {
          display: true,
          text: "India Daily Values",
          fontSize: "30",
        },
        elements: {
          point: {
            radius: 0,
          },
        },
      }}
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ recovered }) => recovered),
            label: "recovered",
            borderColor: "green",
            backgroundColor: "rgba(0,240,0,0.5)",
            fill: true,
          },
          {
            data: dailyData.map(({ death }) => death),
            label: "Deaths",
            borderColor: "red",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.infected),
            label: "Infected",
            borderColor: "Blue",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div className={styles.container}>{lineChart}</div>;
}
