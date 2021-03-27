import 'styles/FilterJobs.css';
import RadioButton from 'components/RadioButton';

const FilterJobs = ({ filterSearch, sendSearch, searchData }) => {
  const { searchTerms, setSearchTerms } = searchData;

  const cities = ['London', 'Amsterdam', 'New York', 'Berlin'];
  const filterOptions = cities.map((city, index) => {
    return (
      <RadioButton
        key={index}
        id={index}
        className="radio-group"
        name="filterlocation"
        label={city}
      />
    );
  });

  const handleJobSearches = (e, searchTerms) => {
    e.preventDefault();
    sendSearch(searchTerms);
    setSearchTerms({ ...searchTerms, description: '', location: '' });
  };

  return (
    <aside className="filterjobs-section">
      <div className="filter-fulltime">
        <form>
          <input
            defaultChecked={searchTerms.isFulltime}
            onChange={() => {
              setSearchTerms({
                ...searchTerms,
                isFulltime: !searchTerms.isFulltime,
              });
              filterSearch();
            }}
            id="fulltime"
            name="fulltime"
            type="checkbox"
          />
          <label htmlFor="fulltime">Full time</label>
        </form>
      </div>
      <div className="search-location">
        <form onSubmit={(e) => handleJobSearches(e, searchTerms)}>
          <label htmlFor="location">location</label>
          <div className="input-control location">
            <i className="material-icons-round">public</i>
            <input
              value={searchTerms.location}
              onChange={(e) =>
                setSearchTerms({ ...searchTerms, location: e.target.value })
              }
              id="location"
              name="location"
              type="text"
              placeholder="City, state, zip code or country"
            />
          </div>
        </form>
      </div>
      <div className="filter-location">
        <form action="">{filterOptions}</form>
      </div>
    </aside>
  );
};

export default FilterJobs;
