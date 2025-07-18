import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getIndvCardData } from "../../API/postApi";
import { RingLoader } from "react-spinners";

const CountryDetails = () => {
    //useParams() hook is used to read the parameter value of given url
    //for eg we have passed this url /country/${name.common}, so useParams
    //will get the value of name.common and route to that page only;
    const params = useParams();

    //for ui smothness,
    const [isPending, startTransition] = useTransition();
    //for data storing;
    const [countryData, setCountryData] = useState({});



    useEffect(() => {
        //startTransition function which will take an callback function;
        startTransition(async () => {
            const res = getIndvCardData(params.id);
            // console.log((await res).data[0]);
            // console.log(Object.values((await res).data[0].currencies)[0].name)
            if ((await res).status === 200) {
                setCountryData((await res).data[0]);
            }
        });
    }, [params.id]);



    //pending state;
    if (isPending) return <div className="loader-container"><RingLoader color="#00bdd6" /></div>



    return (
        <section className="details-section">

            <div className="insection-container">

                <div className="country-img">
                    <img src={countryData?.flags?.svg} alt={countryData?.flags?.alt} />
                </div>

                <div className="all-details">
                    <h1 className="country-name">{countryData?.name?.official}</h1>

                    <div className="other-info">
                        <p>
                            <span className="card-des">Native Names:</span>
                            {countryData?.name?.nativeName &&
                                Object.keys(countryData.name.nativeName).map((key) => (
                                    <span key={key}>{countryData.name.nativeName[key].common} </span>
                                ))
                            }
                        </p>

                        <p>
                            <span className="card-des">Population: </span>
                            {countryData?.population?.toLocaleString()}
                        </p>

                        <p>
                            <span className="card-des">Languges:</span>
                            {countryData?.languages &&
                                Object.keys(countryData.languages).map((lang) => (
                                    <span key={lang}>{countryData.languages[lang]} </span>
                                ))
                            }
                        </p>

                        <p>
                            <span className="card-des">Subregion:</span>
                            {countryData?.subregion}
                        </p>

                        <p>
                            <span className="card-des">Region:</span>
                            {countryData?.region}
                        </p>

                        <p>
                            <span className="card-des">Currencies:</span>
                            {countryData?.currencies &&
                                <span>{Object.values(countryData.currencies)[0].name}</span>
                                // Object.keys(countryData.currencies).map((cur) => (
                                //     <span>{countryData.currencies[cur]}</span>
                                // ))
                            }
                        </p>

                    </div>

                </div>

            </div>

            <NavLink to="/country">
                <button className="back-btn">Back To Countries..</button>
            </NavLink>

        </section>
    )

}

export default CountryDetails;