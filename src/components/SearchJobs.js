import 'styles/SearchJobs.css';

const SearchJobs = ({ sendSearch, searchData }) => {
  const { searchParams, setSearchParams } = searchData;

  // handle job searches
  const handleSearches = (e) => {
    e.preventDefault();
    if (!searchParams.description) return;
    sendSearch(searchParams);
    setSearchParams({ ...searchParams, description: '', location: '' });
  };

  return (
    <section className="search-section">
      <div className="search-box">
        <form onSubmit={handleSearches}>
          <div className="input-control search">
            <i class="material-icons-round">work_outline</i>
            <input
              value={searchParams.description}
              className="input-search"
              id="search"
              name="search"
              type="text"
              placeholder="Title, companies, expertise or benefits"
              onChange={(e) =>
                setSearchParams({
                  ...searchParams,
                  description: e.target.value,
                })
              }
            />
            <input className="submit-search" type="submit" value="Search" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchJobs;
