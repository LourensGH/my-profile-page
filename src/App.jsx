import "./App.css";
import "./Styles.css";
import Banner from "./components/Banner";
import Text from "./components/Text";
import Work from "./components/Work";
import { aboutMe } from "./text-data/text";

function App() {
  return (
    <>
      <Banner />
      <div className="container">
        <div className="full-width-text">
          <Text title="Who am I?" text={aboutMe} />
        </div>
        <div className="duel-card">
          <Work title="Currently Employed @:" text="Lewagon"/>
        </div>
      </div>
    </>
  );
}

export default App;
