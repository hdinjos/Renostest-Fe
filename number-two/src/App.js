import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [visibleModal, setVisibleModal] = useState(false);

  const handleClick = () => {
    setVisibleModal(true);
    console.log("ahha");
  };
  return (
    <div>
      <div className="content">
        <h2>Soal No 1</h2>
        <Button onClick={handleClick}>Show Modal</Button>
      </div>
    </div>
  );
}

export default App;
