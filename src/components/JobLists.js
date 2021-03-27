import 'styles/JobLists.css';
import JobCard from 'components/JobCard';

const JobLists = ({ data, jobId }) => {
  // component card rendering
  const renderJobCard = data.map((job) => {
    return <JobCard key={job.id} innerKey={job.id} data={job} id={jobId} />;
  });

  return (
    <section className="jobslist-section">
      <div className="container-jobscards">{renderJobCard}</div>
      <div className="jobs-pagination"></div>
    </section>
  );
};

export default JobLists;
