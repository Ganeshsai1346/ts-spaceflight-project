/** @format */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetArticles from "./components/GetArticles";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ArticleDetails from "./components/ArticleDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<GetArticles />} />
        <Route path="/ArticleDetails/:articleID" element={<ArticleDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
