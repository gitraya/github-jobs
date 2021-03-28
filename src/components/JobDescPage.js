import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'styles/JobDescPage.css';

const JobDescPage = ({ id, allData, pageState }) => {
  // filtering data
  const data = allData.filter((data) => data.id === id)[0];

  // element reference
  const descRef = useRef(null);
  const emailRef = useRef(null);

  // handle closing the page
  const handleClosePage = () => {
    return pageState({ id: '', display: false });
  };

  // uses effects to send data to an element
  useEffect(() => {
    descRef.current.innerHTML = data.description;
    emailRef.current.innerHTML = data.how_to_apply;
  }, [data]);

  return (
    <main className="main-container">
      <aside className="aside">
        <div className="back-button">
          <button type="submit" onClick={handleClosePage}>
            <i class="material-icons-round">arrow_right_alt</i>Back to search
          </button>
        </div>
        <div className="aside-email">
          <h2>how to apply</h2>
          <div id="email" ref={emailRef} className="email-wrapper"></div>
        </div>
      </aside>
      <section className="detail-section">
        <div className="detail__title">
          <div className="title-wrapper">
            <h2 className="title">{data.title}</h2>
            <button className="fulltime">Full time</button>
          </div>
          <span className="created">
            <i class="material-icons-round">query_builder</i>5 days ago
          </span>
        </div>
        <div className="detail__company">
          <div className="logo">
            {data.company_logo ? (
              <img src={data.company_logo} alt="logo" />
            ) : (
              <span>not found</span>
            )}
          </div>
          <div className="company-wrapper">
            <span className="name">{data.company}</span>
            <span className="location">
              <i className="material-icons-round">public</i>
              {data.location}
            </span>
          </div>
        </div>
        <div ref={descRef} className="detail__description"></div>
      </section>
    </main>
  );
};

JobDescPage.propTypes = {
  id: PropTypes.string.isRequired,
  allData: PropTypes.array.isRequired,
  pageState: PropTypes.func.isRequired,
};

export default JobDescPage;
