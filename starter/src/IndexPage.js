import Bookshelf from "./Bookshelf";
import { useState } from "react";

const IndexPage = ({showSearchpage, setShowSearchpage}) => {

  const CURRENTLY_READING = "Currently Reading";
  const WANT_TO_READ = "Want to Read";
  const READ = "Read";

  const [bookshelves, setBookshelves] = useState({
    [CURRENTLY_READING]: [],
    [WANT_TO_READ]: [],
    [READ]: [],
  })
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf bookshelfName={CURRENTLY_READING} bookshelves={bookshelves} setBookshelves={setBookshelves}/>  
          <Bookshelf bookshelfName={WANT_TO_READ} bookshelves={bookshelves} setBookshelves={setBookshelves}/>
          <Bookshelf bookshelfName={READ} bookshelves={bookshelves} setBookshelves={setBookshelves}/>
        </div>
      </div>
      <div className="open-search">
        <a onClick={() => setShowSearchpage(!showSearchpage)}>Add a book</a>
      </div>
    </div>
  );
};

export default IndexPage;