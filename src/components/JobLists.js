import PropTypes from 'prop-types';
import 'styles/JobLists.css';
import JobCard from 'components/JobCard';
import Pagination from 'components/Pagination';

const JobLists = ({ data, jobId, pagination }) => {
  // component card rendering
  const renderJobCard = data.map((job) => {
    return <JobCard key={job.id} innerKey={job.id} data={job} id={jobId} />;
  });

  return (
    <section className="list-section">
      <div className="list__cards">{renderJobCard}</div>
      <div className="list__pagination">
        <Pagination
          currentPage={pagination.currentPage}
          dataPerPage={pagination.dataPerPage}
          totalData={pagination.backupData.length}
          paginate={pagination.paginate}
          currentPageAllData={pagination.searchParams.page}
          paginateAllData={pagination.paginateAllData}
        />
      </div>
    </section>
  );
};

JobLists.propTypes = {
  data: PropTypes.array.isRequired,
  jobId: PropTypes.object.isRequired,
  pagination: PropTypes.object.isRequired,
};

export default JobLists;
