import PropTypes from 'prop-types';
import 'components/Main/Card/Card.css';
import { checkDate } from 'helpers/helpers';

const Card = ({ innerKey, data, id }) => {
  const { jobId, setJobId } = id;

  const openJobDetails = () => {
    return setJobId({ id: innerKey, display: !jobId.display });
  };

  return (
    <div key={innerKey} className="card-container" onClick={openJobDetails}>
      <div className="card__logo">
        {data.company_logo ? (
          <img src={data.company_logo} alt="logo" />
        ) : (
          <span>not found</span>
        )}
      </div>
      <div className="card__title">
        <span className="name">{data.company}</span>
        <h2 className="title">{data.title}</h2>
        {data.type === 'Full Time' ? (
          <button className="fulltime">Full time</button>
        ) : (
          ''
        )}
      </div>
      <div className="card__time">
        <span>
          <i className="material-icons-round">public</i>
          {data.location}
        </span>
        <span>
          <i class="material-icons-round">query_builder</i>
          {checkDate(data.created_at)}
        </span>
      </div>
    </div>
  );
};

Card.propTypes = {
  innerKey: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  id: PropTypes.object.isRequired,
};

export default Card;
