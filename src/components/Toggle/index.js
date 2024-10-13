import "./styles.css";

const Toggle = (props) => {
  return (
    <div className="switch-container">
      <label className="switch">
        <input
          type="checkbox"
          className="checkbox"
          checked={props.isChecked}
          onChange={props.onChange}
        />
        <span className="slider round"></span>
      </label>
      {props.icon}
      <span>{props.label}</span>
    </div>
  );
};

export default Toggle;
