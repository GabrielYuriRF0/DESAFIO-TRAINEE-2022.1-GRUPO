import "./slide.component.css";

function Slide({ color1, color2, color3 }) {
  return (
    <div className="slide">
      <div className="button-slide">
        <button className={color1}></button>
      </div>
      <div className="button-slide">
        <button className={color2}></button>
      </div>
      <div className="button-slide">
        <button className={color3}></button>
      </div>
    </div>
  );
}

export default Slide;
