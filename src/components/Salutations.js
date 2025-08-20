import React, { useEffect, useRef } from "react";
import "../assets/css/fonts.css";
import "../assets/css/Salutations.css"; // Assurez-vous d'importer les styles

const Salutations = () => {
  const lineRef = useRef(null);
  // Ref pour empêcher le double démarrage de l'animation
  const animationStarted = useRef(false);

  // Tableau des lignes à afficher
  const lines = [
    "Passionné de technologie💻🎉",
    "Developpeur Full-stack📲💻",
    "Salesforce Consultant ☁",
    "Mulesoft Consultant ☁",
  ];

  const speed = 100; // Vitesse d'écriture en millisecondes (augmentée pour tester)
  const pauseBeforeErase = 1000; // Pause après l'écriture complète avant l'effacement
  const pauseBeforeNextLine = 100; // Pause après l'effacement avant la prochaine ligne

  // Fonction pour écrire une ligne lettre par lettre
  const typeLine = (text, element, callback) => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        element.innerText += text.charAt(i);
        i++;
      } else {
        clearInterval(interval);
        callback();
      }
    }, speed);
  };

  // Fonction pour effacer la ligne lettre par lettre
  const eraseLine = (element, callback) => {
    let text = element.innerText;
    let i = text.length;
    const interval = setInterval(() => {
      if (i > 0) {
        element.innerText = text.substring(0, i - 1);
        text = element.innerText;
        i--;
      } else {
        clearInterval(interval);
        callback();
      }
    }, speed / 2);
  };

  useEffect(() => {
    // Empêche l'exécution multiple (exemple en mode Strict de React 18)
    if (animationStarted.current) return;
    animationStarted.current = true;

    const element = lineRef.current;
    let index = 0;

    function next() {
      if (index < lines.length) {
        typeLine(lines[index], element, () => {
          setTimeout(() => {
            eraseLine(element, () => {
              index++;
              setTimeout(next, pauseBeforeNextLine);
            });
          }, pauseBeforeErase);
        });
      } else {
        // Recommencer l'animation en boucle
        index = 0;
        setTimeout(next, pauseBeforeNextLine);
      }
    }

    next();
  }, []);

  return (
    <div id="text-container" style={{ textAlign: "left" }}>
      <span
        ref={lineRef}
        className="salutations-text"
        style={{
          textAlign: "left",
          fontFamily: "Consolaa",
          fontWeight: "bold",
          letterSpacing: "-0.5px",
        }}
      ></span>
      <span className="cursor" style={{ fontFamily: "wingding" }}>
        
      </span>
    </div>
  );
};

export default Salutations;
