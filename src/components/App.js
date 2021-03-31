import { useEffect, useState, useRef } from 'react';
import Footer from 'components/Footer/Footer';
import Search from 'components/Aside/Search/Search';
import Filter from 'components/Aside/Filter/Filter';
import Lists from 'components/Main/Lists/Lists';
import InnerPage from 'components/Main/InnerPage/InnerPage';
import { getData, getPosition } from 'helpers/helpers';
import { useLoading, ThreeDots } from '@agney/react-loading';

const App = () => {
  // react state for loading indicator
  const [isLoading, setIsLoading] = useState(false);
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <ThreeDots width="50" />,
  });

  // react state for job application
  const [allData, setAllData] = useState(null);
  const [backupData, setBackupData] = useState(null);
  const [dataPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobId, setJobId] = useState({
    id: '',
    display: false,
  });
  const [searchParams, setSearchParams] = useState({
    description: '',
    location: '',
    isFulltime: false,
    page: 1,
  });

  // get user location
  const getUserLocation = async () => {
    let data;
    if (navigator.geolocation) {
      try {
        data = await navigator.geolocation.getCurrentPosition(getPosition);
      } catch (error) {
        console.log(error);
      }
    }
    return data;
  };

  // filter data by full time type
  const fulltimeFilter = (isFulltime) => {
    if (isFulltime) {
      return setAllData(allData.filter((data) => data.type === 'Full Time'));
    } else {
      return setAllData(backupData);
    }
  };

  // to handle the search
  const inputLocationRef = useRef(null);
  const sendSearch = (searchParams) => {
    setCurrentPage(1);
    getData(searchParams, setAllData, setBackupData, setIsLoading);
  };

  // change the page number
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const paginateAllData = (number) => {
    setSearchParams({ ...searchParams, page: number });
    setCurrentPage(1);
    getData(
      { ...searchParams, page: number },
      setAllData,
      setBackupData,
      setIsLoading
    );
  };

  // use effect to get data from API
  useEffect(() => {
    const getAllData = async () => {
      if (!allData) {
        try {
          const data = await getUserLocation();
          if (!data)
            return getData(
              searchParams,
              setAllData,
              setBackupData,
              setIsLoading
            );
          setBackupData(data);
          setAllData(data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getAllData();
  });

  // get current data
  let currentData;
  if (allData) {
    const indexLast = currentPage * dataPerPage;
    const indexFirst = indexLast - dataPerPage;
    currentData = allData.slice(indexFirst, indexLast);
  }

  return (
    <div className="App">
      <header>
        <div className="app-logo">
          <span>Github</span> <span>Jobs</span>
        </div>
      </header>
      {jobId.display ? (
        <InnerPage id={jobId.id} allData={allData} pageState={setJobId} />
      ) : (
        <main>
          <Search
            sendSearch={sendSearch}
            searchData={{ searchParams, setSearchParams }}
            forwardedRef={inputLocationRef}
          />
          <Filter
            ref={inputLocationRef}
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
          ) : currentData ? (
            <Lists
              data={currentData}
              jobId={{ jobId, setJobId }}
              pagination={{
                currentPage,
                dataPerPage,
                backupData,
                paginate,
                searchParams,
                paginateAllData,
              }}
            />
          ) : (
            <div></div>
          )}
        </main>
      )}
      <Footer />
    </div>
  );
};

export default App;
