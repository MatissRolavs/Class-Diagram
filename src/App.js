import "./App.css";
import Question2 from "./components/Question2";
import Question3 from "./components/Question3";

function App() {
  return (
    <>
      <article style={{ height: "100vh", overflowY: "scroll" }}>
        <Question2 />
      </article>
      <article style={{ height: "100vh", overflowY: "scroll" }}>
        <Question3 />
      </article>
    </>
  );
}

export default App;
