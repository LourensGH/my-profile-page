import PropTypes from "prop-types";

function Work({ title, image, content, company }) {
  return (
    <div className="work-card">
      <h4>{title}</h4>
      <div className="content">
        <img className="company-logo" src={image} alt="wagon" />
        <h2>{company}:</h2>
        <div className="description">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

Work.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string,
  company: PropTypes.string,
};

export default Work;
