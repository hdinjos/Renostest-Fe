import { useState } from "react";
import Button from "./components/Button";
import Modal from "./components/Modal";
import style from "./style/modal.module.css";

function App() {
  const [visibleModal, setVisibleModal] = useState(false);

  const modalContent = {
    header: <div>User Agreement</div>,
    body: (
      <div>
        <div className={style["modal-title"]}>Lorem Ipsum</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          debitis, dicta sapiente architecto repellat cumque provident
          perferendis assumenda ad ea suscipit error sunt veritatis animi
          dolores repudiandae sint! Error, fuga. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sequi, debitis, dicta sapiente
          architecto repellat cumque provident perferendis assumenda ad ea
          suscipit error sunt veritatis animi dolores repudiandae sint! Error,
          fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          debitis, dicta sapiente architecto repellat cumque provident
          perferendis assumenda ad ea suscipit error sunt veritatis animi
          dolores repudiandae sint! Error, fuga. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sequi, debitis, dicta sapiente
          architecto repellat cumque provident perferendis assumenda ad ea
          suscipit error sunt veritatis animi dolores repudiandae sint! Error,
          fuga.
        </p>
      </div>
    ),
    footer: <div>&copy; hdinjos 2022</div>,
  };

  const showModal = () => {
    setVisibleModal(true);
  };

  const hideModal = () => {
    setVisibleModal(false);
  };
  return (
    <div>
      <div className="content">
        <h2>Soal No 2</h2>
        <Button onClick={showModal}>Show Modal</Button>
      </div>
      <Modal visible={visibleModal} onClose={hideModal}>
        {modalContent}
      </Modal>
    </div>
  );
}

export default App;
