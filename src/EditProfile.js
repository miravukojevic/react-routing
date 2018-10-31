import React from 'react';
import ContainerLogic from './ContainerLogic'
import Modal from './Modal';
import { email } from './helperFunctions';
import { username } from './helperFunctions';
import { password } from './helperFunctions';
import { repeatpassword } from './helperFunctions';
import { oldpassword } from './helperFunctions';

class EditProfile extends React.Component {

    render() { 
        return ( 
            <div className="insideform">
            <ContainerLogic isEditing={true} render={({state, handleChange, onUpdate, closeModalEdit, empty}) => (
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
                        <label>Old Password</label>
                        {!state.isValidOldPassword ? <span className="text-danger">{oldpassword(state.isValidOldPassword)}</span>:''}
                        <input name={state.oldPassword} value={state.oldPassword} onChange={(e) => handleChange('oldPassword',e)}  className={`form-control ${state.isValidOldPassword ? '' : 'is-invalid'}`}  type="password" />
                    </div>
                    <div className="form-group">
                        <label>New Password</label>
                        {!state.isValidPassword ? <span className="text-danger">{password(state.isValidPassword)}</span> : ''}
                        <input type="text" name={state.password} value={state.password} onChange={(e) => handleChange('password',e)}  className={`form-control ${state.isValidPassword ? '' : 'is-invalid'}`} type="password" />
                    </div>
                    <div className="form-group">
                        <label>Repeat Password</label>
                        {!state.isValidRepeatPassword ? <span className="text-danger">{repeatpassword(state.isValidRepeatPassword)}</span>:''}
                        <input name={state.repeatPassword} name={state.repeatPassword} onChange={(e) => handleChange('repeatPassword',e)}  className={`form-control ${state.isValidRepeatPassword ? '' : 'is-invalid'}`}  type="password" />
                    </div>
                    <button className="btn btn-secondary" onClick={onUpdate} type="submit" disabled={ !empty() || !state.isValidEmail || !state.isValidPassword || !state.isValidRepeatPassword || !state.isValidUsername}>Update</button>
                </form>
                {state.isOpen ? <Modal bodyModal="You successfully updated your profile" close="Nice..." closeModal={closeModalEdit} /> : null}
            </div>
            
            )}>
             
            </ContainerLogic>
            
           
        </div>
         );
    }
}
 
export default EditProfile;


 