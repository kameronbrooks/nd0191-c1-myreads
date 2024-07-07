import Book from './Book';

const SearchResultsPane = ({searchQuery, searchResults, bookshelves, setBookshelves, setBannerMessage}) => {
  return (
    searchResults.length === 0 && searchQuery !== "") ?
    (
    <div className="search-books-results">
      <h2 className='no-search-results'>No results found for "{searchQuery}"</h2>
    </div>
    ) 
    :
    (
    <div className="search-books-results">
      <ol className="books-grid">
        {(searchResults.map((book) => (
          <li key={book.id}>
            <Book
              book={book}
              bookshelves={bookshelves}
              setBookshelves={setBookshelves}
              setBannerMessage={setBannerMessage}
            />
          </li>
        )))}
      </ol>
    </div>
    )
}

export default SearchResultsPane;