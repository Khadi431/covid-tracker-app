import { useState } from "react";
import useStats from "../components/useStats";
import Stats from "./Stats";

const CountrySelector = () => {
  const { stats: countries, error, loading } = useStats(
    "https://covid19.mathdro.id/api/countries"
  );
  const [selctedCountry, setSelectedCountry] = useState("GH");

  if (loading) return <h1>loading ...</h1>;
  if (error) return <h1>error</h1>;

  return (
    <>
      <div className="form-container">
        <h2>SELECT A COUNTRY : </h2>
        <select
          value={`${selctedCountry}`}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          {countries.countries.map((country) => (
            <option value={`${country.iso3}`} key={`${country.iso3}`}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selctedCountry}`}
      ></Stats>
    </>
  );
};

export default CountrySelector;
