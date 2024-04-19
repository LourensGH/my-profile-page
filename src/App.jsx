import "./App.css";
import "./Styles.css";
import Banner from "./components/Banner";
import Text from "./components/Text";
import Work from "./components/Work";
import Website from "./components/Website";
import { aboutMe, company, image, content } from "./text-data/text";

function App() {
  return (
    <>
      <Banner />
      <div className="container">
        <div className="full-width-text">
          <Text title="Who am I?" text={aboutMe} />
        </div>
        <div className="duel-card top-spacing">
          <Work title="Currently Employed @:" image={image} company={company} content={content}/>
          <Website />
        </div>
      </div>
    </>
  );
}

export default App;
