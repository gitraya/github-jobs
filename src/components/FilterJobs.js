import 'styles/FilterJobs.css';
import RadioButton from 'components/RadioButton';

const FilterJobs = ({ filterSearch, sendSearch, searchData }) => {
  const { searchParams, setSearchParams } = searchData;

  // handle value changes
  const onValueChange = (e) => {
    setSearchParams({ ...searchParams, location: e.target.value });
    sendSearch({ ...searchParams, location: e.target.value });
  };

  // location filter options
  const cities = ['London', 'Amsterdam', 'New York', 'Berlin'];
  const filterOptions = cities.map((city, index) => {
    return (
      <RadioButton
        key={index}
        id={index}
        className="radio-group"
        name="filterlocation"
        label={city}
        value={city}
        checked={searchParams.location === city}
        onChange={onValueChange}
      />
    );
  });

  // handle job searches
  const handleSearches = (e, searchParams) => {
    e.preventDefault();
    sendSearch(searchParams);
    setSearchParams({ ...searchParams, description: '', location: '' });
  };

  return (
    <aside className="filterjobs-section">
      <div className="filter-fulltime">
        <form>
          <input
            defaultChecked={searchParams.isFulltime}
            onChange={() => {
              setSearchParams({
                ...searchParams,
                isFulltime: !searchParams.isFulltime,
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
        <form onSubmit={(e) => handleSearches(e, searchParams)}>
          <label htmlFor="location">location</label>
          <div className="input-control location">
            <i className="material-icons-round">public</i>
            <input
              value={searchParams.location}
              onChange={(e) =>
                setSearchParams({ ...searchParams, location: e.target.value })
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
