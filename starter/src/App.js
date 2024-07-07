import "./App.css";
import { useState, useEffect } from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import SearchPage from "./SearchPage";
import IndexPage from "./IndexPage";
import { CURRENTLY_READING, WANT_TO_READ, READ } from "./constants";
import BannerMessage from "./BannerMessage";

function App() {

  const [userBooks, setUserBooks] = useState([]);

  const [bannerMessage, setBannerMessage] = useState(null);

  // Fetch books from the BooksAPI and update the bookshelves state
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const books = await BooksAPI.getAll();
        setUserBooks(books.filter((book) => book.shelf !== 'none'));
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
          <Route path="/" element={<IndexPage userBooks={userBooks} setUserBooks={setUserBooks} setBannerMessage={setBannerMessage}/>} />
          <Route path="/search" element={<SearchPage userBooks={userBooks} setUserBooks={setUserBooks} setBannerMessage={setBannerMessage}/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
