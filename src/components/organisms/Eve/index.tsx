import React, { useRef, useEffect } from "react";
import "./index.css";

const EVE_FACES = ["happy", "circle", "ellipse"];

const Eve = () => {
  const panelRef = useRef<HTMLDivElement>(null);
  const scannerRef = useRef<HTMLDivElement>(null);
  const faceRef = useRef<HTMLDivElement>(null);

  const toggleAnimated = () => {
    if (panelRef.current && scannerRef.current) {
      panelRef.current.classList.toggle("animated");
      scannerRef.current.classList.remove("animated");
      setTimeout(() => {
        if (scannerRef.current) {
          scannerRef.current.classList.add("animated");
        }
      }, 12000);
    }
  };
  /** @todo animação do rosto */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _changeEveFace = () => {
    const randomFace = Math.floor(Math.random() * 3);
    const faceName = EVE_FACES[randomFace];
    if (faceRef.current) {
      faceRef.current.className = `${faceName} face`;
    }
  };

  useEffect(() => {
    const interval = setInterval(toggleAnimated, 20000);
    toggleAnimated();

    return () => {
      clearInterval(interval);
      // Limpar timeouts e referências aqui, se necessário
    };
  }, []); // O array vazio assegura que o efeito é executado apenas uma vez, equivalente ao componentDidMount

  return (
    <div className="flex justify-center">
      <div className="eve" ref={faceRef}>
        <div className="head-container">
          <div className="head">
            <div className="ellipse face">
              <div className="left eye"></div>
              <div className="right eye"></div>
            </div>
          </div>
        </div>
        <div className="body-container">
          <div className="scanner" ref={scannerRef}></div>
          <div className="left arm"></div>
          <div className="body">
            <div className="panel" ref={panelRef}>
              <div className="dot dot-1"></div>
              <div className="dot dot-2"></div>
              <div className="dot dot-3"></div>
              <div className="bigdot"></div>
            </div>
          </div>
          <div className="right-container">
            <div className="right arm"></div>
          </div>
        </div>
        <div className="shadow"></div>
      </div>
    </div>
  );
};

export default Eve;
