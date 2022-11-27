import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "./components";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <BrowserRouter>
      <Navbar />
      {/* <>
        <Modal />
      </> */}
      <div>
        <Routes>
          <Route />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
