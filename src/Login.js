import React from 'react';
import ContainerLogic from './ContainerLogic'
import Modal from './Modal';
import { email } from './helperFunctions';
import { password } from './helperFunctions';

const Login = () => (
    
    <div className="insideform">
        <ContainerLogic render={({state, handleChange,  onLogin, closeModal}) => (
            !state.loggedIn ?
            <div className="form-group">
            <form>
                <div className="form-group">
                    <label>Email</label>
                    {!state.isValidEmail ? <span className="text-danger">{email(state.isValidEmail, state.email)}</span> : ''}
                    <input value={state.email} type="text" name='email' onChange={(e) => handleChange('email', e)} key={state.key} placeholder="Enter email adress" className={`form-control ${state.isValidEmail ? '' : 'is-invalid'}`} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    {!state.isValidPassword ? <span className="text-danger">{password(state.isValidPassword)}</span> : ''}
                    <input value={state.password} name='password' onChange={(e) => handleChange('password', e)} className={`form-control ${state.isValidPassword ? '' : 'is-invalid'}`}  type="password" />
                </div>
                <button type="submit" className="btn btn-secondary" onClick={onLogin} disabled={!state.isValidEmail || !state.isValidPassword }>Login</button>
            </form>
            {state.isOpen ? <Modal bodyModal="There is no user in local storage" close="You can do that better" closeModal={closeModal} /> : null}
        </div> : <div>You are already logged in <i className="fa fa-heart" style={{color: 'red'}}></i></div>
        
        )}>
          
        </ContainerLogic>
    
       
    </div>
  );

  export default Login