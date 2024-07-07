import Book from "./Book";
import PropTypes from 'prop-types';

const Bookshelf = ({header, bookshelfName, userBooks, setUserBooks, setBannerMessage}) => {
  const books = userBooks.filter((b)=>b.shelf===bookshelfName);
  const bookCount = books.length;
  
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{`${header} [${bookCount}]`}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
          books.map((book) => (
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