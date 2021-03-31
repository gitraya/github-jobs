import PropTypes from 'prop-types';
import 'components/Main/Lists/Lists.css';
import Card from 'components/Main/Card/Card';
import Pagination from 'components/Main/Pagination/Pagination';

const Lists = ({ data, jobId, pagination }) => {
  // component card rendering
  const renderCard = data.map((job) => {
    return <Card key={job.id} innerKey={job.id} data={job} id={jobId} />;
  });

  return (
    <section className="list-section">
      <div className="list__cards">{renderCard}</div>
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

Lists.propTypes = {
  data: PropTypes.array.isRequired,
  jobId: PropTypes.object.isRequired,
  pagination: PropTypes.object.isRequired,
};

export default Lists;
