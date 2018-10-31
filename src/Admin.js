import React from 'react';
import { updateLocalStorage } from './helperFunctions';

class Admin extends React.Component {
    state = {
        registeredUsers: []
    }

    componentDidMount() {
        if (JSON.parse(localStorage.getItem('list'))) {
            const loginCheck = JSON.parse(localStorage.getItem('list'));

            this.setState({
                registeredUsers: loginCheck
            })

            
        }
    }

    handleClick = (id) => {
        console.log('CLICKED ID', id)
        
        let updatedListOfRegisteredUsers = this.state.registeredUsers.filter(user => user.id !== id )

        this.setState({
            registeredUsers: updatedListOfRegisteredUsers
        })

        updateLocalStorage('list', updatedListOfRegisteredUsers)


    }

    render() {

        const { registeredUsers } = this.state;

        return (
            <div>
                {registeredUsers.map((user, key) => (
                    <div key={key} className="email">
                        {user.id}
                    <span onClick={() => this.handleClick(user.id)} className="removeItem">x</span>
                </div>
                ))}
            </div>
        )
    }
}

export default Admin;