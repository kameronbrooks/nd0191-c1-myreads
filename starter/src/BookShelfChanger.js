import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types';
import { WANT_TO_READ, CURRENTLY_READING, READ } from './constants';

const BookShelfChanger = ({ book, bookshelves, setBookshelves, setBannerMessage }) => {

  const optionData = [{
    shelf: CURRENTLY_READING,
    text: 'Currently Reading'
  }, {
    shelf: WANT_TO_READ,
    text: 'Want to Read'
  }, {
    shelf: READ,
    text: 'Read'
  }, {
    shelf: 'none',
    text: 'None'
  
  }]

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
              ? [...books, {...book, shelf: shelfName}]
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
      <select onChange={handleChange} value={book.shelf || "none"}>
        <option value="none" disabled>
          Move to...
        </option>
        {
          // Filter out the current shelf from the options
          optionData.map((option) => (
            <option key={option.shelf} value={option.shelf} disabled={option.shelf===book.shelf}>
              {option.text}
            </option>
          ))
        }
      </select>
    </div>
  )
}

BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  bookshelves: PropTypes.object.isRequired,
  setBookshelves: PropTypes.func.isRequired,
  setBannerMessage: PropTypes.func.isRequired
};

export default BookShelfChanger;