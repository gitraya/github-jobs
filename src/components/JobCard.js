import 'styles/JobCard.css';

const JobCard = ({ key, data }) => {
  const checkDate = () => {
    const today = new Date().getDate();
    const created = new Date(data.created_at).getDate();

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

  return (
    <div key={key} className="job-card">
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
          {checkDate()}
        </span>
      </div>
    </div>
  );
};

export default JobCard;
