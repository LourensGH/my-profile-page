import PropTypes from "prop-types";

function Text({ title, text }) {
  return (
    <>
      <div className="header">
        <h2>{title}</h2>
      </div>
      <div className="content">
        <p>{text}</p>
      </div>
    </>
  );
}

Text.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Text;
