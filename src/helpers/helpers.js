export const checkDate = (date) => {
  const today = new Date().getDate();
  const created = new Date(date).getDate();

  if (created < today) {
    let day = today - created;
    if (day > 1) {
      return `${day} days ago`;
    } else {
      return 'yesterday';
    }
  } else if (created === today) {
    return 'today';
  }
};

// cors api url
const cors_api = 'https://cors-anywhere-venky.herokuapp.com/';

// check url
const checkUrl = (searchParams) => {
  let url = new URL('https://jobs.github.com/positions.json');

  url.search = new URLSearchParams({
    page: Number(searchParams.page),
    description: searchParams.description.toLowerCase(),
    full_time: `${searchParams.isFulltime ? 'true' : ''}`,
    location: searchParams.location.toLowerCase(),
  });

  return url;
};

// retrieve data from GitHub API
export const getData = async (params, storeData, storeBackup, load) => {
  load(true);
  try {
    const jsonData = await fetch(`${cors_api}${checkUrl(params)}`);
    const data = await jsonData.json();
    storeBackup(data);
    storeData(data);
  } catch (error) {
    console.log(error);
  }
  load(false);
};

// get user position and get jobs data from github
export const getPosition = async ({ coords }) => {
  let data;
  try {
    const jsonData = await fetch(
      `${cors_api}https://jobs.github.com/positions.json?lat=${coords.latitude}&long=${coords.longitude}`
    );
    data = await jsonData.json();
  } catch (error) {
    console.log(error);
  }
  return data;
};
