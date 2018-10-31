import React from 'react';
import ContainerLogic from './ContainerLogic'
import Modal from './Modal';
import { email } from './helperFunctions';
import { username } from './helperFunctions';
import { password } from './helperFunctions';
import { repeatpassword } from './helperFunctions';

const Register = () => (
    
    <div className="insideform">
        <ContainerLogic render={({state, handleChange, onSubmit, closeModal, empty}) => (
            <div className="form-group">
            <form>
                <div className="form-group">
                    <label>Email</label>
                    {!state.isValidEmail ? <span className="text-danger">{email(state.isValidEmail, state.email)}</span> : ''}
                    <input value={state.email} type="text" className={`form-control ${state.isValidEmail ? '' : 'is-invalid'}`} name={state.name} onChange={(e) => handleChange('email',e)}  placeholder="Enter email adress"/>
                </div>
                <div className="form-group">
                    <label>Username</label>
                    {!state.isValidUsername ? <span className="text-danger">{username(state.isValidUsername)}</span> : ''}
                    <input value={state.username} type="text" name={state.username} onChange={(e) => handleChange('username',e)} className={`form-control ${state.isValidUsername ? '' : 'is-invalid'}`} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    {!state.isValidPassword ? <span className="text-danger">{password(state.isValidPassword)}</span> : ''}
                    <input type="text" name={state.password} onChange={(e) => handleChange('password',e)}  className={`form-control ${state.isValidPassword ? '' : 'is-invalid'}`} type="password" />
                </div>
                <div className="form-group">
                    <label>Repeat Password</label>
                    {!state.isValidRepeatPassword ? <span className="text-danger">{repeatpassword(state.isValidRepeatPassword)}</span>:''}
                    <input name={state.repeatPassword} name={state.repeatPassword} onChange={(e) => handleChange('repeatPassword',e)}  className={`form-control ${state.isValidRepeatPassword ? '' : 'is-invalid'}`}  type="password" />
                </div>
                <button className="btn btn-secondary" onClick={onSubmit} type="submit" disabled={ !empty() || !state.isValidEmail || !state.isValidPassword || !state.isValidRepeatPassword || !state.isValidUsername}>Register</button>
            </form>
            {state.isOpen ? <Modal bodyModal="User already exist" close="We are sorry :(" closeModal={closeModal} /> : null}
        </div>
        
        )}>
         
        </ContainerLogic>
        
       
    </div>
  );

  export default Register