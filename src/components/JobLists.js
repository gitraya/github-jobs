import { v4 as uuidv4 } from 'uuid';
import 'styles/JobLists.css';
import JobCard from 'components/JobCard';

const JobLists = ({ data }) => {
  const renderJobCard = data.map((job) => {
    return <JobCard key={uuidv4()} data={job} />;
  });
  return (
    <section className="jobslist-section">
      <div className="container-jobscards">{renderJobCard}</div>
      <div className="jobs-pagination"></div>
    </section>
  );
};

export default JobLists;
