import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired
}

export default SearchBar;