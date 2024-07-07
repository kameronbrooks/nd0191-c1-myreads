import Book from "./Book";
import PropTypes from 'prop-types';

const Bookshelf = ({header, bookshelfName, userBooks, setUserBooks, setBannerMessage}) => {

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{header}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
          userBooks.filter((b)=>b.shelf===bookshelfName).map((book) => (
            <li key={book.id}>
              <Book
                book={book}
                userBooks={userBooks}
                setUserBooks={setUserBooks}
                setBannerMessage={setBannerMessage}
              />
            </li>
          ))
          }
        </ol>
      </div>
    </div>
  );
}

Bookshelf.propTypes = {
  header: PropTypes.string.isRequired,
  bookshelfName: PropTypes.string.isRequired,
  userBooks: PropTypes.object.isRequired,
  setUserBooks: PropTypes.func.isRequired,
  setBannerMessage: PropTypes.func.isRequired
}

export default Bookshelf;