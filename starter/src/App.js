import "./App.css";
import { useState, useEffect } from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import SearchPage from "./SearchPage";
import IndexPage from "./IndexPage";
import { CURRENTLY_READING, WANT_TO_READ, READ } from "./constants";
import BannerMessage from "./BannerMessage";

function App() {

  const [bookshelves, setBookshelves] = useState({
    [CURRENTLY_READING]: [],
    [WANT_TO_READ]: [],
    [READ]: []
  });

  const [bannerMessage, setBannerMessage] = useState(null);

  // Fetch books from the BooksAPI and update the bookshelves state
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const books = await BooksAPI.getAll();
        const bookshelves = {
          [CURRENTLY_READING]: [],
          [WANT_TO_READ]: [],
          [READ]: []
        };
        books.forEach((book) => {
          bookshelves[book.shelf].push(book);
        });
        setBookshelves(bookshelves);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <BannerMessage bannerMessage={bannerMessage} setBannerMessage={setBannerMessage}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage bookshelves={bookshelves} setBookshelves={setBookshelves} setBannerMessage={setBannerMessage}/>} />
          <Route path="/search" element={<SearchPage bookshelves={bookshelves} setBookshelves={setBookshelves} setBannerMessage={setBannerMessage}/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
