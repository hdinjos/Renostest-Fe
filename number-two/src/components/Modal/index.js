import { useEffect } from "react";
import style from "../../style/modal.module.css";

function Modal({ children, visible, onClose }) {
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [onClose]);

  return (
    visible && (
      <div className={style["modal"]} onClick={onClose}>
        <div
          className={style["modal-container"]}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={style["modal-header"]}>
            {children?.header ? (
              children.header
            ) : (
              <div className={style["modal-title"]}>Modal Header</div>
            )}
            <span onClick={onClose} className={style["close"]}>
              &times;
            </span>
          </div>
          <div className={style["modal-body"]}>
            {children?.body ? children.body : "Modal Body"}
          </div>
          <div className={style["modal-footer"]}>
            {children?.footer ? (
              children.footer
            ) : (
              <div className={style["modal-title"]}>Modal Footer</div>
            )}
          </div>
        </div>
      </div>
    )
  );
}

export default Modal;
