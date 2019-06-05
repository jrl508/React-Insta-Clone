import React, {Component} from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts:[],
      filteredPosts:[]
    };
  }

  changeHandler = e =>{
    console.log(e.target.value)
    e.preventDefault();
    this.setState(
        {
            [e.target.name]: e.target.value
        }
    )
  }

  componentDidMount(){
    console.log('CDM invoked!');
    this.setState({
      posts: dummyData
    });
  }

  searchFilter=e=>{
    const filtered = this.state.posts.filter(post => 
      post.username.toLowerCase().includes(e.target.value.toLowerCase())
      )
      this.setState({filteredPosts: filtered})
  }

  render(){
  return (
    <div className="App">
        <div className="nav">
        <ul className="nav-bar">
          <li> <a href='#' className="logo"><i className="fab fa-instagram icon"></i> | Instagram </a></li>
          <SearchBar 
          changeHandler={this.changeHandler} 
          searchFilter={this.searchFilter}
          />
          <li><a href="#"><i className="far fa-compass icon"></i></a></li>
          <li><a href="#"><i className="far fa-heart icon"></i></a></li>
          <li><a href="#"><i className="far fa-user icon"></i></a></li>
        </ul>
    </div>

    <PostContainer
      filteredPosts={this.state.filteredPosts} 
      posts={this.state.posts} 
      changeHandler={this.changeHandler}
    />
    </div>
  );
  }
}


export default App;
