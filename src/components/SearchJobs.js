import 'styles/SearchJobs.css';

const SearchJobs = ({ sendSearch, searchData }) => {
  const { searchTerms, setSearchTerms } = searchData;

  const handleJobSearches = (e) => {
    e.preventDefault();
    sendSearch(searchTerms);
    setSearchTerms({ ...searchTerms, description: '' });
  };

  return (
    <section className="search-section">
      <div className="search-box">
        <form onSubmit={handleJobSearches}>
          <div className="input-control search">
            <i class="material-icons-round">work_outline</i>
            <input
              value={searchTerms.description}
              className="input-search"
              id="search"
              name="search"
              type="text"
              placeholder="Title, companies, expertise or benefits"
              onChange={(e) =>
                setSearchTerms({ ...searchTerms, description: e.target.value })
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
