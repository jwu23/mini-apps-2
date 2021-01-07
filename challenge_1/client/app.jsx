import React from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Search from './search.jsx';
import Results from './results.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      val: '',
      pageNum: 1,
      pageCount: null
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    console.log('hello')
    // axios.get('http://localhost:3000/events?q=good&_page=1')
    // .then(res => {
    //     console.log(res.data)
    //     this.setState({
    //       events: res.data
    //     })
    //   })
    // .catch(err => {
    //   console.log(err)
    // })

    // fetch('http://localhost:3000/events?q=good&_page=1')
    //   .then(resp => resp.json())
    //   .then(data => {
    //     // const events = data.map((event, index) => {
    //     //   console.log(event)
    //     // })
    //     console.log(data)
    //     this.setState({
    //       events: data
    //     })
    //   })
  }

  handleSearch(val, data) {
    console.log('num', this.state.pageNum)
    axios.get(`http://localhost:3000/events?q=${val}&_page=${this.state.pageNum}`)
    .then(res => {
      console.log(res.headers["x-total-count"])
      this.setState({
        events: res.data,
        val: val,
        pageCount: Math.ceil(res.headers['x-total-count'] / 10)
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  handlePageClick(data) {
    console.log('click', data.selected)
    this.setState({
      pageNum: data.selected + 1
    }, () => {
      this.handleSearch(this.state.val)
    })
  }

  render() {
    return (
      <div>
        Search for Record:
        <Search handleSearch={this.handleSearch}/>
        <Results events={this.state.events}/>
        {/* <div className='paginate'> */}
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        {/* </div> */}
        {/* <form>
          <input></input>
        </form> */}
      </div>
    )
  }
}

export default App;