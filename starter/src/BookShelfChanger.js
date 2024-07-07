import * as BooksAPI from './BooksAPI';

const BookShelfChanger = ({ book, bookshelves, setBookshelves, setBannerMessage }) => {

  const handleChange = (e) => {
    const shelfName = e.target.value;

    // If the book is already on the shelf, don't do anything
    if(bookshelves[shelfName] && bookshelves[shelfName].includes(book)) {
      setBannerMessage({status: 'failed', message: 'Good news! This book is already on this shelf :)'});
      return;
    }

    // If the book is not on the shelf, remove it from the current shelf(if applicable) and add it to the new shelf
    setBookshelves(
      Object.fromEntries(
        Object.entries(bookshelves).map(([shelf, books]) => {
          return [
            shelf,
            shelf === shelfName
              ? [...books, book]
              : books.filter((b) => b.id !== book.id)
          ]
          }
        )
      )
    );
    
    // Update the book's shelf on the server
    BooksAPI.update(book, shelfName).then((resp) => {
      setBannerMessage({status: 'success', message: 'Book moved successfully!'});
    }).catch((error) => {
      console.log(error);
      setBannerMessage({status: 'failed', message: 'Failed to move book. Please try again.'});
    });
  };

  return (
    <div className="book-shelf-changer">
      <select onChange={handleChange} defaultValue='placeholder'>
        <option value="placeholder" disabled>
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