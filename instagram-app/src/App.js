import React, {Component} from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts:[]
    };
  }

  componentDidMount(){
    console.log('CDM invoked!');
    this.setState({
      posts: dummyData
    });
  }

  render(){
  return (
    <div className="App">
    <SearchBar/>
    <PostContainer posts={this.state.posts} changeHandler={this.changeHandler}/>
    </div>
  );
  }
}


export default App;
