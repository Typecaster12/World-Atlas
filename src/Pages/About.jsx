import data from '../API/data.json';
const About = () => {
  return (
    <section className='about-section'>
      <h2 className="about-heading">Here Are the Interesting Facts <br /> We are proud of</h2>

      <div className="about-cards">
        <ul className="card-grid">
          {
            data.map((curEle) => (
              <li className="card" key={curEle.id}>
                <div className="incard-container">
                  <p className="card-title">{curEle.name}</p>
                  <p>
                    <span className='card-description'>Capital:</span> {curEle.capital}
                  </p>
                  <p>
                    <span className='card-description'>Population:</span> {curEle.population}
                  </p>
                  <p>
                    <span className='card-description'>Interesting Fact:</span> {curEle.interestingFacts[0]}
                  </p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default About;