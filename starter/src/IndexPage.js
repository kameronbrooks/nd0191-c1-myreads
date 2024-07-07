import Bookshelf from "./Bookshelf";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CURRENTLY_READING, WANT_TO_READ, READ } from "./constants";

const IndexPage = ({bookshelves, setBookshelves, setBannerMessage}) => {

  
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
            bookshelves={bookshelves} 
            setBookshelves={setBookshelves}
            setBannerMessage={setBannerMessage}
          />  
          <Bookshelf 
            header="Want to Read" 
            bookshelfName={WANT_TO_READ} 
            bookshelves={bookshelves} 
            setBookshelves={setBookshelves}
            setBannerMessage={setBannerMessage}
          />
          <Bookshelf 
            header="Read" 
            bookshelfName={READ} 
            bookshelves={bookshelves} 
            setBookshelves={setBookshelves}
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

export default IndexPage;