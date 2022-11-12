import "./buttons.component.css";

function Button({ text, classColor }) {
  return (
    <div className="button">
      <button className={classColor}>{text}</button>
    </div>
  );
}

export default Button;
