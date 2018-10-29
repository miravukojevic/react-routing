import React from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
    withRouter } from 'react-router-dom'

 class Home extends React.Component {
     state = { 
         isAuthenticated: false,
         username: ''
      }
      componentDidMount = () => {
        let checkCurrent= JSON.parse(localStorage.getItem('current'));
        console.log(checkCurrent)
        if(checkCurrent){
            this.setState({
                isAuthenticated: true,
                username: checkCurrent.email.substring(0, checkCurrent.email.lastIndexOf("@"))
            })
        }
    }
    logout = () => {
        this.setState({
            isAuthenticated: false
        })
        localStorage.removeItem('current');
    }

     render() { 
        
         return ( 
             
             !this.state.isAuthenticated ? <div>
                <h1> Please login or register to enter application</h1>
                <ul>
                     <li>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                     </li>
               </ul>
             </div> : <div>
             <h1>Welcome dear {this.state.username}</h1>
                 <Link to="/profile">Profile</Link>
                 <a href="/home" onClick={this.logout}>log Out</a>
                 </div>
            
          );
     }
 }

export default Home;