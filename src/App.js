import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [loading, setLoading] = useState(true);
  let [scrollBarPer, setScrollBarPer] = useState(0);
  let [message, setMessage] = useState("");

  async function onComplete() {
    setMessage("Loading completed");
    setLoading(false);
  }

  async function changeWidthScroll() {
    let intervalTime = setTimeout(() => {
      setScrollBarPer((preVal) => {
        let updateVal = preVal + 1;
        return updateVal;
      });
    }, 100);

    if (scrollBarPer >= 100) {
      clearTimeout(intervalTime);
      onComplete();
      console.log("mansi");
    }
  }

  useEffect(() => {
    changeWidthScroll();
  }, [scrollBarPer]);

  return (
    <div className="App">
      <h1>Progress Bar</h1>

      <progress
        value={scrollBarPer}
        max="100"
        className="progressBar"
      ></progress>

      {/* progrssBar text */}
      <span className="scrollBarText">{scrollBarPer}%</span>

      {loading ? <p>Loading data...</p> : <p>{message}</p>}
    </div>
  );
}

export default App;
