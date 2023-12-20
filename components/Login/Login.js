import React, {  useReducer, useState, useEffect, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

const emailReducer=(state,action)=>{
  if(action.type==='USER_INPUT'){
    return({value:action.val ,isVaild: action.val.includes('@')});
  }
  if(action.type==='INPUT_BLUR'){
    return({value:state.value ,isVaild: state.value.includes('@')});
  }
 return({value:'' ,isVaild: false});
};

const passwordReducer=(state,action)=>{
  if(action.type==='USER_PASSWORD'){
    return({value:action.val ,isVaild: action.val.trim().length > 6 });
  }
  if(action.type==='INPUT_BLUR'){
    return({value:state.value ,isVaild: state.value.trim().length > 6 });
  }
  return({value:'' ,isVaild: false});
};
const Login = (props) => {

  const authCtx=useContext(AuthContext);
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();


  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();

  const [formIsValid, setFormIsValid] = useState(false);

  const[emailState,dispatchEmail]=useReducer(
    emailReducer,
    {value:'' ,
    isVaild: null});

    const[passwordState,dispatchPassword]=useReducer(
      passwordReducer,
      {value:'' ,
      isVaild: null});
  
    const {isVaild : emailIsValid}=emailState;
    const {isVaild : passwordIsValid}=passwordState;

  useEffect(()=>{
    const identifier=setTimeout(()=>{
      setFormIsValid(
        emailIsValid && passwordIsValid 
      );
    },500)
    return()=>{
      console.log('cleanup');
      clearTimeout(identifier);
    };
  },[emailIsValid,passwordIsValid]);

  const emailChangeHandler = (event) => {
   dispatchEmail({type:'USER_INPUT',val:event.target.value});
  };


  const passwordChangeHandler = (event) => {
    dispatchPassword({type:'USER_PASSWORD',val:event.target.value});

    // setFormIsValid(
    //   event.target.value.trim().length > 6 && emailState.isVaild
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type:'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type:'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input id='email' 
        label='Email' type='email' isVaild={emailIsValid} value={emailState.value}
         onChange={emailChangeHandler}
         onBlur={validateEmailHandler}
         />
          
          <Input id='password' 
        label='Password' type='password' isVaild={passwordIsValid} value={passwordState.value}
         onChange={passwordChangeHandler}
         onBlur={validatePasswordHandler}
         />

        
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
