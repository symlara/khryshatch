import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar, About, Modal } from "./components";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <BrowserRouter>
      <Navbar />
      <>
        <Modal />
      </>
      <div>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
