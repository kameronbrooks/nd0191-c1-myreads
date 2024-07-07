import BookShelfChanger from "./BookShelfChanger";
import PropTypes from 'prop-types';

const Book = ({book, userBooks, setUserBooks, setBannerMessage}) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className={`book-cover ${book.shelf}`}
          style={{
            width: 128,
            height: 193,
            backgroundImage:
              `url("${book.imageLinks ? book.imageLinks.thumbnail : ''}")`,
          }}
        ></div>
        <BookShelfChanger
          book={book}
          userBooks={userBooks}
          setUserBooks={setUserBooks}
          setBannerMessage={setBannerMessage}
        />
      </div>
      <div className="book-title">{book.title}</div>
      {book.shelf === "currentlyReading" && <div className={`book-shelf ${book.shelf}`}>[Currently Reading]</div>}
      {book.shelf === "wantToRead" && <div className={`book-shelf ${book.shelf}`}>[Want to Read]</div>}
      {book.shelf === "read" && <div className={`book-shelf ${book.shelf}`}>[Read]</div>}
      <div className="book-authors">{book.authors ? book.authors.join(", ") : "No Authors"}</div>
    </div>
  )
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  userBooks: PropTypes.object.isRequired,
  setUserBooks: PropTypes.func.isRequired,
  setBannerMessage: PropTypes.func.isRequired
}

export default Book;