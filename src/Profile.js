import React from 'react';
import { 
    BrowserRouter as Router,
    Link } from 'react-router-dom'

class Profile extends React.Component {
    state = { 
        username: '',
        email: '',
        isAuthenticated: false,
        checkAdmin: false
     }
    componentDidMount = () => {
        let loginCheck = JSON.parse(localStorage.getItem('list'));
        let checkCurrent= JSON.parse(localStorage.getItem('current'));
        let checkAdmin = JSON.parse(localStorage.getItem('admin'));
        let i = 0
            for(i; i < loginCheck.length; i++){

                console.log('LOOP', i)
            
                if(checkCurrent.value.email === loginCheck[i].id && checkCurrent.value.password === loginCheck[i].value.password) {

                    console.log('MATCH USER')
                    this.setState({
                        username: loginCheck[i].value.username,
                        email: loginCheck[i].id

                    })

                } 

                // Check if it's admin
                if(checkCurrent.value.email === checkAdmin.id && checkCurrent.value.password === checkAdmin.value.password) {

                    console.log('MATCH USER')
                    this.setState({
                        username: checkAdmin.value.username,
                        email: checkAdmin.id,
                        checkAdmin: true

                    })

                } 
            }
            
            console.log(checkCurrent)
            if(checkCurrent){
                this.setState({
                    isAuthenticated: true
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
        <div>
            <h1>Welcome to profile page</h1>
            <table style={{width: '100%', textAlign:'left' }}>
                <tr>
                    <td>Username: </td>
                    <td style={{color:'red'}}>{this.state.username}</td>
                </tr>
                <tr>
                    <td>Email: </td>
                    <td style={{color:'red'}}>{this.state.email}</td>
                </tr>
            </table>
            <Link to="/profile/edit">Edit Profile</Link>
            <a href="/home" onClick={this.logout}>log Out</a>
            
        </div>
            );
    }
}
 
export default Profile;