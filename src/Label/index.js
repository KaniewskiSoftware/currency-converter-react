import "./style.css"
const Label = (title, body) => (
  <p>
    <label>
      <span className="calculator__text">{title}</span>
      {body}
    </label>
  </p>
);

export default Label;
