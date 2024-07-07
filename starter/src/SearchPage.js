import { Link } from 'react-router-dom';
import { CURRENTLY_READING, WANT_TO_READ, READ } from "./constants";
import { useState, useEffect } from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import BannerMessage from './BannerMessage';
import SearchBar from './SearchBar';
import SearchResultsPane from './SearchResultsPane';
import PropTypes from 'prop-types';

const SearchPage = ({ userBooks, setUserBooks, setBannerMessage }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Update the search results when the user's books change
  // This ensures that the search results reflect the user's books states
  useEffect(() => {
    if(!searchResults || searchResults.length === 0) {
      return;
    }

    setSearchResults(searchResults.map(
      (book) => {
        console.log("Changing search results");
        const userBook = userBooks.find((b) => b.id === book.id);
        return userBook ? userBook : {...book, shelf: 'none'};
      }
    ));
  }, [userBooks]);


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

        setSearchResults(results.map(
          (book) => {
            // If the book is not on the shelf, set the shelf to none
            book = {...book, shelf: 'none'};

            // If the book is on the shelf, set the shelf to the user's shelf
            const userBook = userBooks.find((b) => b.id === book.id);
            return userBook ? userBook : book;
          }
        ));

      } catch (error) {
        console.log(error);
      }

    };
    searchForBooks(searchQuery);
  }, [searchQuery]);



  return (
    <div className="search-books">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SearchResultsPane searchQuery={searchQuery} searchResults={searchResults} setSearchResults={setSearchResults} userBooks={userBooks} setUserBooks={setUserBooks} setBannerMessage={setBannerMessage} />
    </div>
  )
};

SearchPage.propTypes = {
  userBooks: PropTypes.array.isRequired,
  setUserBooks: PropTypes.func.isRequired,
  setBannerMessage: PropTypes.func.isRequired
}

export default SearchPage;