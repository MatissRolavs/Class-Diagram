import React from "react";
import "./Questions.css";
const Question3 = () => {
  return (
    <div className="question">
      <p className="question-text">Kādi UML elementi ir šajā diagrammā?</p>
      <p className="question-text">
        Klase: Taisnstūris, kas apzīmē konkrētu klasi sistēmā. Tajā ir trīs
        sadaļas - klases nosaukums, atribūti un metodes.
        <br />
        Atribūti: Klases īpašības, kuras parasti ir uzskaitītas otrajā sadaļā.
        <br />
        Metodes: Klases funkcijas vai darbības, kuras parasti ir uzskaitītas
        trešajā sadaļā.
        <br />
        Saknes (association): Savienojumi starp klasēm, kas parāda to
        attiecības. Šīs var būt vienkāršas savienojošās līnijas vai sarežģītākas
        saites.
        <br />
        Mantojums (inheritance): Hierarhija starp klasēm, ko attēlo bultas no
        apakšklases uz virsklasi.
        <br />
        Interfeiss (interface): Speciāla klase, kurā ir tikai metožu galvenes.
        To parasti attēlo taisnstūris ar līniju, kas norāda, ka tas ir
        interfeiss.
        <br />
        Ģeneralizācija: Attiecības, kurās viena klase ir citas klases
        specializācija. Tā tiek attēlota ar atvērto trīsstūri no specializētās
        klases uz ģeneralizēto klasi.
      </p>
    </div>
  );
};

export default Question3;
