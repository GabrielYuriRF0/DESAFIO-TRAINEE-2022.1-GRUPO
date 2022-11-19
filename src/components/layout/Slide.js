import "./slide.component.css";
import Button from "../details/Buttons";

function Slide({ color1, color2, color3 }) {
  return (
    <div className="slide">
      <div className="button-slide">
        <Button to="/" classColor={color1} />
      </div>
      <div className="button-slide">
        <Button to="/sobre" classColor={color2} />
      </div>
      <div className="button-slide">
        <Button to="/faleconosco" classColor={color3} />
      </div>
    </div>
  );
}

export default Slide;
