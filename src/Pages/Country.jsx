import { useEffect, useState, useTransition } from "react"
import { getCountriesData } from "../API/postApi";
import { RingLoader } from "react-spinners";
import CountryCard from "../Components/Layout/CountryCard";
import SearchFilter from "../Components/UI/SearchFilter";

const Country = () => {
  //useTransition hook, for our ui smoothnes from heavy tasks like data fetching and other stuff;
  //isPending returns boolean, so if it is true we can show loader(loading);
  //startTranstion is a methods in which all the data fetching related work is passed so that it can maintain the smoothness of the ui without unnessecary re-renders;
  const [isPending, startTranstion] = useTransition();
  //to store the data into array;
  const [countriesData, setCountriesData] = useState([]);

  //states for storing values for our search and flter functionality;
  //searchInput => searched value by user;
  //on the basis of searchInput, we can filter data from the main array containing res.data;
  //selected value by user => filterInput;
  const [searchInput, setSearchInput] = useState();
  const [filterInput, setFilterInput] = useState("all");

  console.log(`filter input is: ${filterInput}`);
  //useEffect;
  useEffect(() => {
    //wrapping the non-urgent re-render;
    startTranstion(async () => {
      const res = await getCountriesData();
      //store the data;
      setCountriesData(res.data);
    })
  }, []);


  //pending state;
  if (isPending) return <div className="loader-container"><RingLoader color="#00bdd6" /></div>


  //filter logic;
  //country is the individual country
  const searchCountry = (country) => {
    //if user searched anything,
    //will check all the individual country, if that country's name is same,
    //the user searched, then that country will be returned;
    if (searchInput) {
      return country.name.common.toLowerCase().includes(searchInput.toLowerCase());
    }

    //else return data of all countries;
    return country;
  }

  const filterRegion = (country) => {
    // console.log(`country region is: ${country.region}`);
    //by default the value is all, so return all the country by default;
    if (filterInput === "all") return true;
    //return that countries only whose region is the choosen one by user from dropbox;
    return country.region.toLowerCase() === filterInput.toLowerCase();
  }

  //we will now map on this data, instead of countriesData array to get the search functionality;
  const filterCountries = countriesData.filter((country) => searchCountry(country) && filterRegion(country));


  return (
    <section className="country-section">

      <SearchFilter search={searchInput} filter={filterInput} setSearch={setSearchInput} setFilter={setFilterInput} />

      <ul className="country-container country-grid">
        {
          filterCountries.map((curCountry, index) => (
            <CountryCard country={curCountry} key={index} />
          ))
        }
      </ul>
    </section>
  )
}

export default Country;