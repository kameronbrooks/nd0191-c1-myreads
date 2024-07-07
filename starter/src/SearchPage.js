import { Link } from 'react-router-dom';
import { CURRENTLY_READING, WANT_TO_READ, READ } from "./constants";
import { useState, useEffect } from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import BannerMessage from './BannerMessage';
import SearchBar from './SearchBar';
import SearchResultsPane from './SearchResultsPane';

const SearchPage = ({ bookshelves, setBookshelves, setBannerMessage }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");


  // Update the search results when the search query changes
  useEffect(() => {
    const searchForBooks = async (query) => {
      try {
        if (query === "") {
          setSearchResults([]);
          return;
        }

        const results = await BooksAPI.search(query);
        if (results.error) {
          setSearchResults([]);
          return;
        }
        setSearchResults(results);

      } catch (error) {
        console.log(error);
      }

    };
    searchForBooks(searchQuery);
  }, [searchQuery]);



  return (
    <div className="search-books">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SearchResultsPane searchQuery={searchQuery} searchResults={searchResults} bookshelves={bookshelves} setBookshelves={setBookshelves} setBannerMessage={setBannerMessage} />
    </div>
  )
};

export default SearchPage;