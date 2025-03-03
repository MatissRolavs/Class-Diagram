import "./App.css";
import Question2 from "./components/Question2";
import Question3 from "./components/Question3";
import Question4 from "./components/Question4";

function App() {
  return (

<div>
      <article style={{ height: "100vh", overflowY: "scroll" }}>
        <Question2 />
      </article>
      
      <article style={{ height: "100vh", overflowY: "scroll" }}>
        <Question3 />
      </article>

      <article style={{ height: "100vh", overflowY: "scroll" }}>
        <Question4 />
      </article>
    </div>
  );
}

export default App;
