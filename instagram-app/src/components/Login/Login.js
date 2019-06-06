import React,{Component} from 'react';

class Login extends Component{
    state ={
        username:'',
    }

      
  login=(e)=>{
    localStorage.setItem('username', this.state.username);
    localStorage.setItem('isLoggedIn',true);
    }


  changeHandler = e =>{
    console.log(e.target.value)
    this.setState(
        {
            [e.target.name]: e.target.value
        }
    )
  }
    
    render(){

        return(
         <>
            <form onSubmit={this.login}>
                <input type="text" name="username" onChange={this.changeHandler} value={this.state.username}/>
                <input type="text" name="password" onChange={this.changeHandler}/>
                <input type="submit" name="Login"/>
            </form>
            
         </>
        )
        }
}

export default Login;