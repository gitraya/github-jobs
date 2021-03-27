import 'styles/JobCard.css';
import { checkDate } from 'helpers/helpers';

const JobCard = ({ innerKey, data, id }) => {
  const { jobId, setJobId } = id;

  const openJobDetails = () => {
    return setJobId({ id: innerKey, display: !jobId.display });
  };

  return (
    <div key={innerKey} className="job-card" onClick={openJobDetails}>
      <div className="card-logo">
        {data.company_logo ? (
          <img src={data.company_logo} alt="company_logo" />
        ) : (
          <span>not found</span>
        )}
      </div>
      <div className="card-desc">
        <span className="company">{data.company}</span>
        <h2 className="role">{data.title}</h2>
        {data.type === 'Full Time' ? (
          <button className="full">Full time</button>
        ) : (
          ''
        )}
      </div>
      <div className="card-time">
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

export default JobCard;
