

const BookShelfChanger = ({ book, bookshelves, setBookshelves }) => {

  const handleChange = (e) => {
    setBookshelves(
      Object.fromEntries(
        Object.entries(bookshelves).map(([shelf, books]) => {
          return [
            shelf,
            shelf === e.target.value
              ? [...books, book]
              : books.filter((b) => b.id !== book.id)
          ]
          }
        )
      )
    );
  };

  return (
    <div className="book-shelf-changer">
      <select onChange={handleChange}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">
          Currently Reading
        </option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}

export default BookShelfChanger;