import { useRef, useEffect } from 'react';
import 'styles/JobDescPage.css';

const JobDescPage = ({ id, allData, pageState }) => {
  const data = allData.filter((data) => data.id === id)[0];
  const descRef = useRef(null);
  const emailRef = useRef(null);

  const handleClosePage = () => {
    return pageState({ id: '', display: false });
  };

  useEffect(() => {
    descRef.current.innerHTML = data.description;
    emailRef.current.innerHTML = data.how_to_apply;
  }, [data]);
  console.log(data);

  return (
    <main className="jobdesc-container">
      <aside className="jobdesc-aside">
        <div className="back-button">
          <button type="submit" onClick={handleClosePage}>
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
            <h2 className="role">{data.title}</h2>
            <button className="full">Full time</button>
          </div>
          <span className="jobdesc-created">
            <i class="material-icons-round">query_builder</i>5 days ago
          </span>
        </div>
        <div className="jobdesc-company">
          <div className="company-logo">
            {data.company_logo ? (
              <img src={data.company_logo} alt="logo" />
            ) : (
              <span>not found</span>
            )}
          </div>
          <div className="company-text">
            <span className="company">{data.company}</span>
            <span className="location">
              <i className="material-icons-round">public</i>
              {data.location}
            </span>
          </div>
        </div>
        <div ref={descRef} className="jobdesc-content"></div>
      </section>
    </main>
  );
};

export default JobDescPage;
