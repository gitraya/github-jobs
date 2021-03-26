// import { useEffect } from 'react';
import SearchJobs from 'components/SearchJobs';
import FilterJobs from 'components/FilterJobs';

function App() {
  // useEffect(() => {
  //   const getData = async () => {
  //     await fetch(
  //       'https://cors-anywhere-venky.herokuapp.com/https://jobs.github.com/positions.json?search=node'
  //     )
  //       .then((res) => res.json())
  //       .then((data) => console.log(data))
  //       .catch((err) => console.log(err));
  //   };
  //   getData();
  // }, []);

  return (
    <div className="App">
      <header>
        <div className="App-logo">
          <span>Github</span> <span>Jobs</span>
        </div>
      </header>
      <main>
        <SearchJobs />
        <FilterJobs />
        <section className="jobslist-section">
          <div className="container-jobscards"></div>
          <div className="jobs-pagination"></div>
        </section>
      </main>
    </div>
  );
}

export default App;
