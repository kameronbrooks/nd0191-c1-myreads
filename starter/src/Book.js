import BookShelfChanger from "./BookShelfChanger";
import PropTypes from 'prop-types';

const Book = ({book, bookshelves, setBookshelves, setBannerMessage}) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage:
              `url("${book.imageLinks ? book.imageLinks.thumbnail : ''}")`,
          }}
        ></div>
        <BookShelfChanger
          book={book}
          bookshelves={bookshelves}
          setBookshelves={setBookshelves}
          setBannerMessage={setBannerMessage}
        />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors && book.authors.join(", ")}</div>
    </div>
  )
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  bookshelves: PropTypes.object.isRequired,
  setBookshelves: PropTypes.func.isRequired,
  setBannerMessage: PropTypes.func.isRequired
}

export default Book;