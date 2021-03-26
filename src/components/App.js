function App() {
  return (
    <div className="App">
      <header>
        <div className="App-logo">
          <span>Github</span> <span>Jobs</span>
        </div>
      </header>
      <main>
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
            <form action="">
              <div className="radio-group">
                <input type="radio" name="filterlocation" id="loc-1" />
                <label htmlFor="loc-1">London</label>
              </div>
              <div className="radio-group">
                <input type="radio" name="filterlocation" id="loc-2" />
                <label htmlFor="loc-2">Amsterdam</label>
              </div>
              <div className="radio-group">
                <input type="radio" name="filterlocation" id="loc-3" />
                <label htmlFor="loc-3">New York</label>
              </div>
              <div className="radio-group">
                <input type="radio" name="filterlocation" id="loc-4" />
                <label htmlFor="loc-4">Berlin</label>
              </div>
            </form>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;
