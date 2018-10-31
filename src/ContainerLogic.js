import React, { Component } from 'react';
import validator from 'validator';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { updateLocalStorage } from './helperFunctions';

class ContainerLogic extends Component {
    state = { 
        name: 'name', 
        value: "", 
        placeholder: 'type text here', 
        email: '',
        newItem: '',
        username:'',
        repeatPassword: '',
        oldPassword: '',
        list: [],
        isOpen: false,
        isValidEmail: true,
        isValidUsername: true,
        isValidPassword: true,
        isValidRepeatPassword: true,
        isValidOldPassword: true,
        password: '',
        updatedList: []
    }

    LocalDataGet = () => {
        const {value} = this.state.value;
        const cachedHits = localStorage.getItem(value);
    }

    handleChange = (inputName, event) => {
        //  console.log(this.state.isValidUsername)

        const email = (value) => {
            if (!validator.isEmail(value)) {
              return false
            }
            return true
          };

        const username = (value) => {
            if (value.length > 8  && validator.isLowercase(value)) {
                return true
            }
            return false
        }
        const password = (value) => {
            console.log(value.length < 5)
            if (value.length < 5) {
                return false
            }
            return true
        }
        const repeatpassword = (value) => {
            if (!validator.equals(this.state.password, value)) {
                return false
            }
            return true
        }
        const oldPassword = (value) => {
            let checkCurrent= JSON.parse(localStorage.getItem('current'));
            console.log(value)
            if (checkCurrent.value.password == value) {
                return true
            }
            return false
        }
        if (inputName === 'email') {
            this.setState({
                email: event.target.value,
                isValidEmail: email(event.target.value),
            })
            return;
        }

        if (inputName === 'username') {
            this.setState({
                username: event.target.value,
                isValidUsername: username(event.target.value),
            })

            return;
        }

        if (inputName === 'password') {
            console.log(this.state.password)
            this.setState({
                password: event.target.value,
                isValidPassword: password(event.target.value),
            })

            return;
        }
        if (inputName === 'oldPassword') {
            this.setState({
                oldPassword: event.target.value,
                isValidOldPassword: oldPassword(event.target.value),
            })

            return;
        }
        if (inputName === 'repeatPassword') {
            this.setState({
                repeatPassword: event.target.value,
                isValidRepeatPassword: repeatpassword(event.target.value),
            })

            return;
        }
    }
    onUpdate = (e) => {
        e.preventDefault();
        console.log('update')
        if (JSON.parse(localStorage.getItem('list'))) {
            const loginCheck = JSON.parse(localStorage.getItem('list'));
            let checkCurrent= JSON.parse(localStorage.getItem('current'));
           
            let updatedListOfEditedProfiles = loginCheck.filter(item => item.id !== checkCurrent.id )
            const updateditem = {
                id: this.state.email,
                value: {
                    username: this.state.username,
                    password: this.state.password,
                    email: this.state.email
                }
            };
            console.log(updateditem)
            updateLocalStorage('list', [...updatedListOfEditedProfiles,updateditem])
            updateLocalStorage('current', updateditem)
            this.setState({
                isOpen: true
            })
            
            
        }
    }

    onSubmit = (e) => {

        e.preventDefault();
        console.log('SUBMIT')

            const newItem = {
                id: this.state.email,
                value: {
                    username: this.state.username,
                    password: this.state.password,
                    email: this.state.email
                }
            };

            let arr = [newItem]

            if (!JSON.parse(localStorage.getItem('list'))) {
                
                localStorage.setItem("list", JSON.stringify(arr));
            
            } else {
                
                let getStorageList = [...JSON.parse(localStorage.getItem('list')), newItem];


                if (!JSON.parse(localStorage.getItem('list')).find(item => item.id === newItem.id)) {
              
                    localStorage.setItem("list", JSON.stringify(getStorageList));
                    this.props.history.push({
                        pathname: `/login`
                    })
                    // localStorage.setItem("newItem", "");
              
              }else{
                  this.setState({
                      isOpen: true
                  })
              }
              
            }
       
    }
    empty = () => {
        if (this.state.email.length == 0 || this.state.username.length == 0 || this.state.password.length == 0 || this.state.repeatPassword.length == 0){
            return false
        }
        return true
    }
    onLogin = (e) => {
        e.preventDefault();


        let loginCheck = JSON.parse(localStorage.getItem('list'));
        let checkAdmin= JSON.parse(localStorage.getItem('admin'));
        let checkUser = false;

         // Check if user that logged in is Admin
         if (checkAdmin.value.email === this.state.email ){
            
            this.props.history.push({
                pathname: `/admin`
            })
        }

        // Check if user already exist in local storage
        
        
            let i = 0
            for(i; i < loginCheck.length; i++){

                console.log('LOOP', i)
            
                if(this.state.email == loginCheck[i].id && this.state.password == loginCheck[i].value.password) {

                    console.log('MATCH USER')
                
                    checkUser = true
                } 
            }
            

        


        if (checkUser) {
            this.props.history.push({
                pathname: `/home`
            })
            localStorage.setItem('current', JSON.stringify(
                {
                    id: this.state.email,
                    value: {
                        username: this.state.username,
                        password: this.state.password,
                        email: this.state.email
                    }
                }))
        } else {
            this.setState({
                isOpen: true
            })
        }
        console.log('checkAdmin', checkAdmin.value.email)
        console.log('state email', this.state.email)
       


    }
    componentDidMount = () => {

        if(this.props.isEditing) {
            let currentUser = JSON.parse(localStorage.getItem('current'));
        
         this.setState ({
            email: currentUser.value.email,
            username: currentUser.value.username,
            oldPassword: currentUser.value.password,
            password: '',
            repeatPassword: '',
            oldData: true
         })
        }
        const admin = {
            id: "admin@admin.com",
            value: {
                username: 'admin',
                password: 'admin',
                email: 'admin@admin.com'
            }
        }
        localStorage.setItem("admin", JSON.stringify(admin))
        // localStorage.setItem("list", JSON.stringify([
        //     {
        //         id: "test@admin.com",
        //         value: {
        //             username: 'marko',
        //             password: 'marko',
        //             email: 'test@admin.com'
        //         }
        //     },
        //     {
        //         id: "mira@admin.com",
        //         value: {
        //             username: 'mira',
        //             password: 'mirka',
        //             email: 'mira@admin.com'
        //         }
        //     },
        //     {
        //         id: "anja@admin.com",
        //         value: {
        //             username: 'anjica',
        //             password: 'anjica',
        //             email: 'anjica@admin.com'
        //         }
        //     }]))
    }

    closeModal = () => {
         this.setState({
             isOpen: false
         })
     }
     closeModalEdit = () => {
        this.setState({
            isOpen: false
        })
        this.props.history.push({
           pathname: `/profile`
       })
    }
    render() { 
        return ( 
            <div>
               {this.props.render({
                   state: this.state,
                   handleChange: this.handleChange,
                   onLogin: this.onLogin,
                   onSubmit: this.onSubmit,
                   id: this.id,
                   closeModal: this.closeModal,
                   closeModalEdit: this.closeModalEdit,
                   empty: this.empty,
                   onUpdate: this.onUpdate

               })}
             
            </div> );
            
    }
}
 // this.state, this.handleChange, this.onLogin, this.onSubmit, this.id, this.closeModal, this.empty
export default withRouter(ContainerLogic);