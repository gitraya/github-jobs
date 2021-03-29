import PropTypes from 'prop-types';
import 'styles/Pagination.css';
import { v4 as uuidv4 } from 'uuid';

const Pagination = ({
  currentPage,
  dataPerPage,
  totalData,
  paginate,
  currentPageAllData,
  paginateAllData,
}) => {
  // to get an array of page numbers
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  // to navigate page from github API
  const pageAllData = (key, textIcon, number) => {
    return (
      <li key={key} className="paginate-control">
        <button
          className={'paginate-item'}
          type="button"
          onClick={() => paginateAllData(number)}
        >
          <i class="material-icons-round">{textIcon}</i>
        </button>
      </li>
    );
  };

  // to get a neighbor's number
  const leftNeighbor = pageNumbers[pageNumbers.indexOf(currentPage) - 1];
  const rightNeighbor = pageNumbers[pageNumbers.indexOf(currentPage) + 1];
  const pageNeighbors = (neighborNumber) => {
    return (
      <li key={neighborNumber} className="paginate-control">
        <button
          className={'paginate-item'}
          type="button"
          onClick={() => paginate(neighborNumber)}
        >
          {neighborNumber}
        </button>
      </li>
    );
  };

  return (
    <nav className="pagination-container">
      <ul className="paginate-wrapper">
        {/* navigate number page all data */}
        {currentPageAllData > 1
          ? pageAllData(uuidv4(), 'navigate_before', currentPageAllData - 1)
          : ''}

        {/* to the first page */}
        {pageNumbers.length > 5 && currentPage > pageNumbers.length / 2 - 1 ? (
          <li key={pageNumbers[0]} className="paginate-control">
            <button
              className="paginate-item"
              type="button"
              onClick={() => paginate(pageNumbers[0])}
            >
              {pageNumbers[0]}
            </button>
          </li>
        ) : (
          ''
        )}

        {/* more icon */}
        {pageNumbers.length > 5 && currentPage > pageNumbers.length / 2 - 1 ? (
          <li key={uuidv4()} className="paginate-control">
            <button className="paginate-item more" type="button">
              <i class="material-icons-round">more_horiz</i>
            </button>
          </li>
        ) : (
          ''
        )}

        {/* left neighbor */}
        {currentPage > pageNumbers[0] ? pageNeighbors(leftNeighbor) : ''}

        {/* current page number */}
        {totalData > dataPerPage ? (
          <li key={currentPage} className="paginate-control">
            <button className="paginate-item active" type="button">
              {currentPage}
            </button>
          </li>
        ) : (
          ''
        )}

        {/* right neighbor */}
        {currentPage <= pageNumbers.length - 1
          ? pageNeighbors(rightNeighbor)
          : ''}

        {/* more icon */}
        {pageNumbers.length > 5 && currentPage < pageNumbers.length / 2 + 1 ? (
          <li key={uuidv4()} className="paginate-control">
            <button className="paginate-item more" type="button">
              <i class="material-icons-round">more_horiz</i>
            </button>
          </li>
        ) : (
          ''
        )}

        {/* to the last page */}
        {pageNumbers.length > 5 && currentPage < pageNumbers.length / 2 + 1 ? (
          <li
            key={pageNumbers[pageNumbers.length - 1]}
            className="paginate-control"
          >
            <button
              className="paginate-item"
              type="button"
              onClick={() => paginate(pageNumbers[pageNumbers.length - 1])}
            >
              {pageNumbers[pageNumbers.length - 1]}
            </button>
          </li>
        ) : (
          ''
        )}

        {/* navigate number page all data */}
        {totalData === 50
          ? pageAllData(uuidv4(), 'navigate_next', currentPageAllData + 1)
          : ''}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  dataPerPage: PropTypes.number.isRequired,
  totalData: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPageAllData: PropTypes.number.isRequired,
  paginateAllData: PropTypes.func.isRequired,
};

export default Pagination;
