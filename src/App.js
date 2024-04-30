import React from "react";
import { Routes, Route } from "react-router-dom";

import IndexPage from "./pages/IndexPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
      <Route path="/:id" element={<DetailPage />} />
    </Routes>
  );
}

export default App;
