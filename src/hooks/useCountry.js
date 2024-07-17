import { useState, useEffect } from "react";

const useCountry = () => {
  const [country, setCountry] = useState("USA");
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${country}`
      );
      const data = await response.json();
      setCountryData(data);
    };

    fetchCountryData();
  }, [country]);

  return { country, setCountry, countryData };
};

export default useCountry;
