import Book from "./Book";

const Bookshelf = ({header, bookshelfName, bookshelves, setBookshelves, setBannerMessage}) => {
  const books = bookshelves[bookshelfName];

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{header}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
          books.map((book) => (
            <li key={book.id}>
              <Book
                book={book}
                bookshelves={bookshelves}
                setBookshelves={setBookshelves}
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

export default Bookshelf;