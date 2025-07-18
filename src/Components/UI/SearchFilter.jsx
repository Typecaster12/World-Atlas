
const SearchFilter = ({ search, filter, setSearch, setFilter }) => {

  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  }

  const handleSelectChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  }

  return (
    <section className="search-section">
      <input type="text" placeholder="search" value={search} onChange={handleInputChange} />

      <div>
        <select className="select-container" value={filter} onChange={handleSelectChange}> {/*by default the value=all*/}
          <option value="all">all</option>
          <option value="africa">africa</option>
          <option value="america">america</option>
          <option value="asia">asia</option>
          <option value="europe">europe</option>
          <option value="oceania">oceania</option>
        </select>
      </div>
    </section>
  )
}

export default SearchFilter;