import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit() {
    event.preventDefault();
    console.log('hello')
    this.props.handleSearch(this.state.searchVal);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' id='searchVal' placeholder='Search Term' onChange={this.handleChange}></input>
          <button>Search</button>
        </form>
      </div>
    )
  }
}

export default Search;