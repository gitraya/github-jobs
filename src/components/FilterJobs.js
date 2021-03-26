import 'styles/FilterJobs.css';
import RadioButton from 'components/RadioButton';

const FilterJobs = () => {
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

  return (
    <aside className="filterjobs-section">
      <div className="filter-fulltime">
        <form action="">
          <input id="fulltime" name="fulltime" type="checkbox" />
          <label htmlFor="fulltime">Full time</label>
        </form>
      </div>
      <div className="search-location">
        <form action="">
          <label htmlFor="location">location</label>
          <div className="input-control location">
            <i className="material-icons-round">public</i>
            <input
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
