import React from "react";
import "./Questions.css";

const Question1 = () => {
    return (
        <article>
            <div className="question-text">
                <h2>Kas ir klases diagramma?</h2>
                <p className="question-text">Tā ir diagramma, kura attēlo klašu informāciju pārskatāmā veidā.</p>
            </div>
            <div className="question-text">
                <h2>Struktūras vai uzvedības modeļa daļa?</h2>
                <p className="question-text">Klases diagrammas ir struktūras modeļa daļa - attēlo klases, to īpašības un savstarpējās attiecības.</p>
            </div>
        </article>
      );
}

export default Question1;