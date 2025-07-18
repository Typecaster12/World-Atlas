import { NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {
    const { flags, name, population, region, capital } = country;
    return (
        <li className="country-card">
            <div className="card-container">
                <img src={flags.svg} alt={`${name.common} Flag`} />
            </div>

            <div className="country-info">
                <p className="country-name">{name.common}</p>

                <p className="country-popu">
                    Population: <span>{population.toLocaleString()}</span>
                </p>

                <p className="country-region">
                    Region: <span>{region}</span>
                </p>

                <p className="country-capital">
                    Capital: <span>{capital[0]}</span>
                </p>

                {/* button for complete details(dynamic routing) */}
                <NavLink to={`/country/${name.common}`} className="country-btn-container">
                    <button className="country-btn">Know more</button>
                </NavLink>
            </div>
        </li>

    )
}

export default CountryCard;