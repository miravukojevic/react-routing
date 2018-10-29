import React from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
    withRouter } from 'react-router-dom'

// const Home = () => {
//     return ( 
//         <div>
//             <h1> Welcome to Task 5</h1>
//             <ul>
//                 <li>
//                 <Link to="/login">Login</Link>
//                 <Link to="/register">Register</Link>
//                 </li>
//             </ul>
//         </div>
//      );
// }
 class Home extends React.Component {
     state = { 
         isAuthenticated: false
      }
     render() { 
         return ( 
             this.state.isAuthenticated ? <div>
                <h1> Welcome to Task 5</h1>
                <ul>
                     <li>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                     </li>
               </ul>
             </div> : <div><Link to="/profile">Profile</Link></div>
            
          );
     }
 }

export default Home;