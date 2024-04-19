import PropTypes from "prop-types";

function Work({ title, text }) {
  return (
    <div className="card">
      <h4>{title}</h4>
      <div className="content">
        <p>{text}</p>
      </div>
    </div>
  );
}

Work.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Work;
