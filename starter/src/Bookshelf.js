import Book from "./Book";

const Bookshelf = ({bookshelfName, bookshelves, setBookshelves}) => {
  const books = bookshelves[bookshelfName];

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookshelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
          books.map((book) => (
            <li key={book.id}>
              <Book
                book={book}
                bookshelves={bookshelves}
                setBookshelves={setBookshelves}
              />
            </li>
          ))
          }
        </ol>
      </div>
    </div>
  );
}

export default Bookshelf;