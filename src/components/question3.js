import React from "react";
import "./Questions.css";
const Question3 = () => {
  return (
    <div className="question">
      <h1 className="question-text">Kādi UML elementi ir šajā diagrammā?</h1>
      <ul className="question-list">
        <li className="question-item">
          <h2>Klase</h2>
          <p>
            Taisnstūris, kas apzīmē konkrētu klasi sistēmā. Tajā ir trīs sadaļas
            - klases nosaukums, atribūti un metodes.
          </p>
        </li>
        <li className="question-item">
          <h2>Atribūti</h2>
          <p>Klases īpašības, kuras parasti ir uzskaitītas otrajā sadaļā</p>
        </li>
        <li className="question-item">
          <h2>Metodes</h2>
          <p>
            Klases funkcijas vai darbības, kuras parasti ir uzskaitītas trešajā
            sadaļā
          </p>
        </li>
        <li className="question-item">
          <h2>Saknes (association)</h2>
          <p>
            Savienojumi starp klasēm, kas parāda to attiecības. Šīs var būt
            vienkāršas savienojošās līnijas vai sarežģītākas saites
          </p>
        </li>
        <li className="question-item">
          <h2>Mantojums (inheritance)</h2>
          <p>
            Hierarhija starp klasēm, ko attēlo bultas no apakšklases uz
            virsklasi
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Question3;
