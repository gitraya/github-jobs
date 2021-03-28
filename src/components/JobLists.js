import PropTypes from 'prop-types';
import 'styles/JobLists.css';
import JobCard from 'components/JobCard';

const JobLists = ({ data, jobId }) => {
  // component card rendering
  const renderJobCard = data.map((job) => {
    return <JobCard key={job.id} innerKey={job.id} data={job} id={jobId} />;
  });

  return (
    <section className="list-section">
      <div className="list__cards">{renderJobCard}</div>
      <div className="list__pagination"></div>
    </section>
  );
};

JobLists.propTypes = {
  data: PropTypes.array.isRequired,
  jobId: PropTypes.object.isRequired,
};

export default JobLists;
