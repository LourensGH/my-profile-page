import PropTypes from "prop-types";
function Website() {
  return (
    <div className="work-card web">
      <h4>Go check them out</h4>
      <div className="content">
        <a href="https://www.lewagon.com/">
          <img className="web-pic" src="/src/assets/lewagon.png" alt="Descriptive text" />
        </a>
      </div>
    </div>
  );
}

Website.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Website;
