import { useEffect, useState } from 'react';
import Footer from 'components/Footer';
import SearchJobs from 'components/SearchJobs';
import FilterJobs from 'components/FilterJobs';
import JobLists from 'components/JobLists';

function App() {
  const cors_api = 'https://cors-anywhere-venky.herokuapp.com/';
  const [allJobs, setAllJobs] = useState(null);

  const checkUrl = (search) => {
    return `https://jobs.github.com/positions.json${
      search ? `?search=${search}` : ''
    }`;
  };

  const getData = async (value) => {
    await fetch(`${cors_api}${checkUrl(value)}`)
      .then((res) => res.json())
      .then((data) => {
        setAllJobs(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  const jobSearch = (value) => {
    getData(value);
  };

  useEffect(() => {
    if (!allJobs) return getData();
  }, [allJobs]);

  return (
    <div className="App">
      <header>
        <div className="App-logo">
          <span>Github</span> <span>Jobs</span>
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
