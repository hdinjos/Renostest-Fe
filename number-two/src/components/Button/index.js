import style from "../../style/button.module.css";

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className={style["btn-show"]}>
      {children}
    </button>
  );
}

export default Button;
