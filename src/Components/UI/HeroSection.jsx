import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
    return (
        <>
            <main className="hero-section">
                <div className="hero-container">

                    <div className="hero-content">
                        <h1 className="content-heading">
                            Explore the World, One Country at a Time.
                        </h1>

                        <p className="content-para">
                            Discover the history, culture, and beauty of every nation. Sort, Search, and filter through countries to find the detailed information
                        </p>

                        <NavLink className="content-btn" to="/country">
                            Start Exploring <FaLongArrowAltRight />
                        </NavLink>
                    </div>

                    <div className="hero-image">
                        <img src="/images/world.png" alt="world image" className="image-tag" />
                    </div>

                </div>
            </main>
        </>
    )
}

export default HeroSection;