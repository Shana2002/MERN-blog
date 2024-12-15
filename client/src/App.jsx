import React from "react";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import About from "./pages/About";
import Article from "./pages/Article";
import Navbar from './components/Navbar'
import ArticlesList from "./pages/ArticlesList";
import NotFount from "./pages/NotFount";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <div className="max-w-screen-lg mx-auto pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles-list" element={<ArticlesList />} />
          <Route path="/article/:name" element={<Article />} />
          <Route path="*" element={<NotFount />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
