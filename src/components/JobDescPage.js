import { useRef, useEffect } from 'react';
import 'styles/JobDescPage.css';

const JobDescPage = ({ id, data }) => {
  const jobdata = data.filter((data) => data.id === id)[0];
  const descRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    descRef.current.innerHTML = jobdata.description;
    emailRef.current.innerHTML = jobdata.how_to_apply;
  }, [jobdata]);
  console.log(jobdata);

  return (
    <main>
      <aside className="jobdesc-aside">
        <div className="back-button">
          <button>
            <i class="material-icons-round">arrow_right_alt</i>Back to search
          </button>
        </div>
        <div className="apply-container">
          <h2>how to apply</h2>
          <div ref={emailRef} className="apply-text"></div>
        </div>
      </aside>
      <section className="jobdesc-main">
        <div className="jobdesc-title">
          <div className="title">
            <h2 className="role">{jobdata.title}</h2>
            <button className="full">Full time</button>
          </div>
          <span className="jobdesc-created">
            <i class="material-icons-round">query_builder</i>5 days ago
          </span>
        </div>
        <div className="jobdesc-company">
          <div className="company-logo"></div>
          <div className="company-text">
            <span className="company">{jobdata.company}</span>
            <span className="location">
              <i className="material-icons-round">public</i>
              {jobdata.location}
            </span>
          </div>
        </div>
        <div ref={descRef} className="jobdesc-content"></div>
      </section>
    </main>
  );
};

export default JobDescPage;
