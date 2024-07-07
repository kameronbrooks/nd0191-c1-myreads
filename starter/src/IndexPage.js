import Bookshelf from "./Bookshelf";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CURRENTLY_READING, WANT_TO_READ, READ } from "./constants";
import PropTypes from 'prop-types';

const IndexPage = ({userBooks, setUserBooks, setBannerMessage}) => {

  
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf 
            header="Currently Reading" 
            bookshelfName={CURRENTLY_READING} 
            userBooks={userBooks} 
            setUserBooks={setUserBooks}
            setBannerMessage={setBannerMessage}
          />  
          <Bookshelf 
            header="Want to Read" 
            bookshelfName={WANT_TO_READ} 
            userBooks={userBooks} 
            setUserBooks={setUserBooks}
            setBannerMessage={setBannerMessage}
          />
          <Bookshelf 
            header="Read" 
            bookshelfName={READ} 
            userBooks={userBooks} 
            setUserBooks={setUserBooks}
            setBannerMessage={setBannerMessage}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

IndexPage.propTypes = {
  userBooks: PropTypes.object.isRequired,
  setUserBooks: PropTypes.func.isRequired,
  setBannerMessage: PropTypes.func.isRequired
}

export default IndexPage;