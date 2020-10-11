import React, { useEffect, useState } from "react";

import { Countries } from "../../api";
import styles from "./Country.module.css";

const Country = (props) => {
  const { changer } = props;
  const [countries, setFetchCountries] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      setFetchCountries(await Countries());
    };
    fetchCountries();
  }, [setFetchCountries]);
  return (
    <div className={styles.formControl}>
      <select defaultValue="" onChange={(e) => changer(e.target.value)}>
        <option value="">India Daily</option>
        {countries.map((val, i) => {
          return (
            <option value={val} key={i}>
              {val}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Country;
