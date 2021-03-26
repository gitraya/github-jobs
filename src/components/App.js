import { useEffect, useState } from 'react';
import Footer from 'components/Footer';
import SearchJobs from 'components/SearchJobs';
import FilterJobs from 'components/FilterJobs';
import JobLists from 'components/JobLists';

function App() {
  const cors_api = 'https://cors-anywhere-venky.herokuapp.com/';
  const [allJobs, setAllJobs] = useState(null);

  const checkUrl = (description, location, fulltime) => {
    return `https://jobs.github.com/positions.json${
      description ? `?description=${description}` : ''
    }${fulltime ? `&full_time=true` : ''}${
      location ? `&location=${location}` : ''
    }`;
  };

  const getData = async (description, location, fulltime) => {
    await fetch(`${cors_api}${checkUrl(description, location, fulltime)}`)
      .then((res) => res.json())
      .then((data) => {
        setAllJobs(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  const jobSearch = (description, location, fulltime) => {
    getData(description, location, fulltime);
  };

  useEffect(() => {
    if (!allJobs) return getData();
  }, [allJobs]);

  return (
    <div className="App">
      <header>
        <div className="App-logo">
          <button type="button" onClick={async () => await getData()}>
            <span>Github</span> <span>Jobs</span>
          </button>
        </div>
      </header>
      <main>
        <SearchJobs sendSearch={jobSearch} />
        <FilterJobs />
        {allJobs ? <JobLists data={allJobs} /> : <div></div>}
      </main>
      <Footer />
    </div>
  );
}

export default App;
