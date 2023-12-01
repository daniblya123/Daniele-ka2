import axios from "axios";
import { WeatherViewer } from "./Components/WeatherViewer";
import { useState, FormEvent, useEffect } from "react";

function TemperatureChecker() {
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const alphaVantageParams = {
      q: "Paris",
      apikey: "287a23f619254b8395293118230112"
    };

    useEffect(() => {
      axios
        .get("http://api.weatherapi.com/v1")
        .then(response => setData(response.data));
    }, []);

    try {
      const response = async;
      axios.get("http://api.weatherapi.com/v1"),
        {
          params: alphaVantageParams
        };
      const timeSeries = response?.data["Current weather"];
    } catch (error) {
      setErrorMessage(String(error));
    }

    return <p>safssdaf</p>;
  };
}

export default TemperatureChecker;
