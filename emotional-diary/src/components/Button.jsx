import "./button.css";
const Button = ({ text, type = "DEFAULT", onClick }) => {
  return (
    <button onClick={onClick} className={`Button Button_${type}`}>
      {text}
    </button>
  );
};

export default Button;
