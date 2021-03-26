function App() {
  return (
    <div className="App">
      <header>
        <div className="App-logo">Github Jobs</div>
      </header>
      <main>
        <section className="search-section">
          <div className="search-box">
            <form>
              <div className="input-control">
                <input
                  id="search"
                  name="search"
                  type="text"
                  placeholder="Title, companies, expertise or benefits"
                />
                <input type="submit" value="Search" />
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
