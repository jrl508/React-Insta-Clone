import React,{Component} from 'react';

const withAuthenticate=(PostsPage) => (LoginPage)  =>{
    class HOC extends Component{
        constructor(props){
            super(props);

        }

        render(){ 
                if(localStorage.getItem('isLoggedIn')){
                    return (<PostsPage/>)

                } else {
                    return <LoginPage/>
                }
            
        }
    }

    return HOC;
}


export default withAuthenticate;