import { useRef } from 'react';
import PropTypes from 'prop-types';
import 'styles/SearchJobs.css';

const SearchJobs = ({ sendSearch, searchData, forwardedRef }) => {
  const { searchParams, setSearchParams } = searchData;
  const inputRef = useRef(null);

  // handle job searches
  const handleSearches = (e, searchParams) => {
    e.preventDefault();
    if (!inputRef.current.value && !forwardedRef.current.value) return;
    setSearchParams(searchParams);
    sendSearch(searchParams);
    inputRef.current.value = '';
    forwardedRef.current.value = '';
  };

  return (
    <section className="search-section">
      <div className="search-box">
        <form
          onSubmit={(e) =>
            handleSearches(e, {
              ...searchParams,
              description: inputRef.current.value,
              location: forwardedRef.current.value,
              page: 1,
            })
          }
        >
          <div className="input-control search">
            <i class="material-icons-round">work_outline</i>
            <input
              ref={inputRef}
              className="input-search"
              id="search"
              name="search"
              type="text"
              placeholder="Title, companies, expertise or benefits"
            />
            <input className="submit-search" type="submit" value="Search" />
          </div>
        </form>
      </div>
    </section>
  );
};

SearchJobs.propTypes = {
  sendSearch: PropTypes.func.isRequired,
  searchData: PropTypes.object.isRequired,
  forwardedRef: PropTypes.object.isRequired,
};

export default SearchJobs;
