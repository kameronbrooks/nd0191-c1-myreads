import BookShelfChanger from "./BookShelfChanger";

const Book = ({book, bookshelves, setBookshelves}) => {
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
        />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors.join(", ")}</div>
    </div>
  )
}

export default Book;