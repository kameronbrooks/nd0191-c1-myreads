import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import BooksAPI from "./BooksAPI";
import SearchPage from "./SearchPage";
import IndexPage from "./IndexPage";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchPage setShowSearchpage={setShowSearchpage} showSearchpage={showSearchPage} />
      ) : (
        <IndexPage setShowSearchpage={setShowSearchpage} showSearchpage={showSearchPage} />
      )}
    </div>
  );
}

export default App;
