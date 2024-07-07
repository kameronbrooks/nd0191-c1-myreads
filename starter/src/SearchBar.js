import { Link } from 'react-router-dom';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-books-bar">
      <Link className="close-search" to="/">Close</Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          onChange={(e) => { setSearchQuery(e.target.value) }}
        />
      </div>
    </div>
  )
}

export default SearchBar;