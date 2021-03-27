import { useEffect, useState } from 'react';
import Footer from 'components/Footer';
import SearchJobs from 'components/SearchJobs';
import FilterJobs from 'components/FilterJobs';
import JobLists from 'components/JobLists';

function App() {
  const cors_api = 'https://cors-anywhere-venky.herokuapp.com/';
  const [allJobs, setAllJobs] = useState(null);
  const [backupData, setBackupData] = useState(null);
  const [searchTerms, setSearchTerms] = useState({
    description: '',
    location: '',
    isFulltime: false,
  });

  const checkUrl = (searchTerms) => {
    let url = new URL('https://jobs.github.com/positions.json');

    url.search = new URLSearchParams({
      description: searchTerms.description.toLowerCase(),
      full_time: `${searchTerms.isFulltime ? 'true' : ''}`,
      location: searchTerms.location.toLowerCase(),
    });

    return url;
  };

  const fulltimeFilter = () => {
    if (searchTerms.isFulltime) {
      return setAllJobs(allJobs.filter((data) => data.type === 'Full Time'));
    } else {
      return setAllJobs(backupData);
    }
  };

  const getData = async (searchTerms) => {
    await fetch(`${cors_api}${checkUrl(searchTerms)}`)
      .then((res) => res.json())
      .then((data) => {
        setAllJobs(data);
        setBackupData(data);
      })
      .catch((err) => console.log(err));
  };

  const jobSearch = (searchTerms) => {
    getData(searchTerms);
  };

  useEffect(() => {
    if (!allJobs) return getData(searchTerms);
  }, [allJobs, searchTerms]);

  return (
    <div className="App">
      <header>
        <div className="App-logo">
          <button
            type="button"
            onClick={async () => await getData(searchTerms)}
          >
            <span>Github</span> <span>Jobs</span>
          </button>
        </div>
      </header>
      <main>
        <SearchJobs
          sendSearch={jobSearch}
          searchData={{ searchTerms, setSearchTerms }}
        />
        <FilterJobs
          filterSearch={fulltimeFilter}
          sendSearch={jobSearch}
          searchData={{ searchTerms, setSearchTerms }}
        />
        {allJobs ? <JobLists data={allJobs} /> : <div></div>}
      </main>
      <Footer />
    </div>
  );
}

export default App;
