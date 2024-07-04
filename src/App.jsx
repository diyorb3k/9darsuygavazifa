import React from "react";
import Header from "./components/Header/Header";
import PostlestSearch from "./components/Main/PostlestSearch";
import Postlist from "./components/Main/postlist/Postlist";
import Detilis from "./components/Detilisi/Detilis";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Postlist />} />
          <Route path="/product/:id" element={<Detilis />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
