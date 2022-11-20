import React from "react";
import Popup from "reactjs-popup";
import "./pop.component.css";

export default ({ imagem, titulo, content, content2, enviar, cancelar }) => (
  <Popup trigger={<button className="button"> {imagem} </button>} modal nested>
    {(close) => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> {titulo} </div>
        <div className="content">
          {" "}
          {content}
          {content2}
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="button enviar"> {enviar} </button>}
            position="top center"
            nested
          ></Popup>
          <button
            className="button cancelar"
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
          >
            {cancelar}
          </button>
        </div>
      </div>
    )}
  </Popup>
);
