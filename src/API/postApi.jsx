import axios from "axios";

//instance of axios;
const api = axios.create({
    baseURL: "https://restcountries.com/v3.1"
});

//get method;
export const getCountriesData = () => {
    return api.get("/all?fields=name,population,region,capital,flags");
}

//get method with a parametere;
export const getIndvCardData = (IndvName) => {
    return api.get(`/name/${IndvName}?fullText=true&fields=name,population,region,subregion,capital,flags,tld,currencies,languages,borders`);
}


// "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags"