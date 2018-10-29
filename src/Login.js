import React from 'react';
import ContainerLogic from './ContainerLogic'
import Modal from './Modal';

const email = (isValidEmail, email) => {
    if (!isValidEmail) {
      return (
          `${email} is not a valid email.`

      )
    }
    return `${email} is a valid email.`
};
const password = (isValidPassword) => {
    if (!isValidPassword) {
      return (
          `Password must contain at least 5 characters.`

      )
    }
    return ``
};

const Login = () => (
    
    <div className="insideform">
        <ContainerLogic render={({state, handleChange,  onLogin, closeModal}) => (
            <div className="form-group">
            <form>
                <div className="form-group">
                    <label>Email</label>
                    {!state.isValidEmail ? <span className="text-danger">{email(state.isValidEmail, state.email)}</span> : ''}
                    <input value={state.email} type="text" name={state.name} onChange={(e) => handleChange('email', e)} key={state.key} placeholder="Enter email adress" className={`form-control ${state.isValidEmail ? '' : 'is-invalid'}`} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    {!state.isValidPasword ? <span className="text-danger">{password(state.isValidPasword)}</span> : ''}
                    <input name={state.password} onChange={(e) => handleChange('password', e)} className={`form-control ${state.isValidPasword ? '' : 'is-invalid'}`}  type="password" />
                </div>
                <button type="submit" className="btn btn-secondary" onClick={onLogin} disabled={!state.isValidEmail || !state.isValidPasword }>Login</button>
            </form>
            {state.isOpen ? <Modal bodyModal="There is no user in local storage" close="You can do that better" closeModal={closeModal} /> : null}
        </div>
        
        )}>
          
        </ContainerLogic>
       
    </div>
  );

  export default Login