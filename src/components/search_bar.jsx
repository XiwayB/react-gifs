import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class SearchBar extends Component {

  handleUpdate = (event) => {
    this.props.search(event.target.value)
  }

  render() {
    return (
      <div className="searchBar">
        <input type="text" className="form-search" onChange={this.handleUpdate}/>
        <div className="search">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
    )
  }
}

export default SearchBar;
