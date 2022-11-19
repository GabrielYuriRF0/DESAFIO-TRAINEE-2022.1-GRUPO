import "./buttons.component.css";
import {Link} from 'react-router-dom'

function Button({ text, classColor, to }) {
  return (
    <div className="button">
      <Link className={classColor} to={to}>{text}</Link>
    </div>
  );
}

export default Button;
