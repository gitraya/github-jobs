import 'styles/SearchJobs.css';

const SearchJobs = () => {
  return (
    <section className="search-section">
      <div className="search-box">
        <form>
          <div className="input-control search">
            <i class="material-icons-round">work_outline</i>
            <input
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

export default SearchJobs;
