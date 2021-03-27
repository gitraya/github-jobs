import { useEffect, useState } from 'react';
import Footer from 'components/Footer';
import SearchJobs from 'components/SearchJobs';
import FilterJobs from 'components/FilterJobs';
import JobLists from 'components/JobLists';
import JobDescPage from 'components/JobDescPage';
import { useLoading, ThreeDots } from '@agney/react-loading';

function App() {
  // cors api url
  const cors_api = 'https://cors-anywhere-venky.herokuapp.com/';

  // react state for loading indicator
  const [isLoading, setIsLoading] = useState(false);
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <ThreeDots width="50" />,
  });

  // react state for job application
  const [allData, setAllData] = useState(null);
  const [backupData, setBackupData] = useState(null);
  const [jobId, setJobId] = useState({
    id: '',
    display: false,
  });
  const [searchParams, setSearchParams] = useState({
    description: '',
    location: '',
    isFulltime: false,
  });

  // check url
  const checkUrl = (searchParams) => {
    let url = new URL('https://jobs.github.com/positions.json');

    url.search = new URLSearchParams({
      description: searchParams.description.toLowerCase(),
      full_time: `${searchParams.isFulltime ? 'true' : ''}`,
      location: searchParams.location.toLowerCase(),
    });

    return url;
  };

  // filter data by full time type
  const fulltimeFilter = () => {
    if (searchParams.isFulltime) {
      return setAllData(allData.filter((data) => data.type === 'Full Time'));
    } else {
      return setAllData(backupData);
    }
  };

  // retrieve data from GitHub API
  const getData = async (searchParams) => {
    setIsLoading(true);
    await fetch(`${cors_api}${checkUrl(searchParams)}`)
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
        setBackupData(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
    setIsLoading(false);
  };

  // to handle the search
  const sendSearch = (searchParams) => {
    getData(searchParams);
  };

  // use effect to get data from API
  useEffect(() => {
    if (!allData) return getData(searchParams);
  }, [allData, searchParams]);

  return (
    <div className="App">
      <header>
        <div className="app-logo">
          <span>Github</span> <span>Jobs</span>
        </div>
      </header>
      {jobId.display ? (
        <JobDescPage id={jobId.id} allData={allData} pageState={setJobId} />
      ) : (
        <main>
          <SearchJobs
            sendSearch={sendSearch}
            searchData={{ searchParams, setSearchParams }}
          />
          <FilterJobs
            filterSearch={fulltimeFilter}
            sendSearch={sendSearch}
            searchData={{ searchParams, setSearchParams }}
          />
          {isLoading ? (
            <div className="load-animation" {...containerProps}>
              {indicatorEl}
            </div>
          ) : allData && allData.length < 1 ? (
            <div className="not-found">No results found</div>
          ) : allData ? (
            <JobLists data={allData} jobId={{ jobId, setJobId }} />
          ) : (
            <div></div>
          )}
        </main>
      )}
      <Footer />
    </div>
  );
}

export default App;
