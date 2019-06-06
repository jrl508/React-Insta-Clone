import React, {Component} from 'react';
import './App.css';
import withAuthenticate from './authentication/withAuthenticate'
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';


const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login)

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts:[],
      filteredPosts:[],
      isLoggedIn:false
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
    if (localStorage.getItem('isLoggedIn')){

      this.setState({
        isLoggedIn:true
      })
    } else{
      this.setState({
        isLoggedIn:false
      })
    }
  }
  

  render(){
  return (
    <ComponentFromWithAuthenticate/>
  );
  }
}


export default App;
