import { useState } from 'react';
import 'styles/SearchJobs.css';

const SearchJobs = ({ sendSearch }) => {
  const [search, setSearch] = useState('');
  const handleJobSearches = (e) => {
    e.preventDefault();
    sendSearch(search);
  };

  return (
    <section className="search-section">
      <div className="search-box">
        <form onSubmit={handleJobSearches}>
          <div className="input-control search">
            <i class="material-icons-round">work_outline</i>
            <input
              value={search}
              className="input-search"
              id="search"
              name="search"
              type="text"
              placeholder="Title, companies, expertise or benefits"
              onChange={(e) => setSearch(e.target.value)}
            />
            <input className="submit-search" type="submit" value="Search" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchJobs;
