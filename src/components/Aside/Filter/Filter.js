import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import 'components/Aside/Filter/Filter.css';
import RadioButton from 'components/Aside/RadioButton';

const Filter = forwardRef(({ filterSearch, sendSearch, searchData }, ref) => {
  const { searchParams, setSearchParams } = searchData;

  // handle value changes
  const onValueChange = (e) => {
    setSearchParams({ ...searchParams, location: e.target.value, page: 1 });
    sendSearch({ ...searchParams, location: e.target.value, page: 1 });
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

  return (
    <aside className="filter-section">
      <div className="filter__fulltime">
        <form>
          <input
            defaultChecked={searchParams.isFulltime}
            onChange={() => {
              setSearchParams({
                ...searchParams,
                isFulltime: !searchParams.isFulltime,
              });
              filterSearch(!searchParams.isFulltime);
            }}
            id="fulltime"
            name="fulltime"
            type="checkbox"
          />
          <label htmlFor="fulltime">Full time</label>
        </form>
      </div>
      <div className="filter__search-location">
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="location">location</label>
          <div className="input-control location">
            <i className="material-icons-round">public</i>
            <input
              ref={ref}
              id="location"
              name="location"
              type="text"
              placeholder="City, state, zip code or country"
            />
          </div>
        </form>
      </div>
      <div className="filter__location">
        <form action="">{filterOptions}</form>
      </div>
    </aside>
  );
});

Filter.propTypes = {
  filterSearch: PropTypes.func.isRequired,
  sendSearch: PropTypes.func.isRequired,
  searchData: PropTypes.object.isRequired,
};

export default Filter;
