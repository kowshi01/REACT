//login.js
import React, {  useReducer, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

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
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();

  const [enteredCollegename, setEnteredCollegename] = useState('');
  const [collegenameIsValid, setCollegenameIsValid] = useState();

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
  

  // useEffect(()=>{
  //   const identifier=setTimeout(()=>{
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6 && enteredCollegename.trim().length>1
  //     );
  //   },500)
  //   return()=>{
  //     clearTimeout(identifier);
  //   };
  // },[enteredEmail,enteredPassword,enteredCollegename]);

  const emailChangeHandler = (event) => {
   dispatchEmail({type:'USER_INPUT',val:event.target.value});
  };

  const collegeChangeHandler = (event) => {
    setEnteredCollegename(event.target.value);    
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type:'USER_PASSWORD',val:event.target.value});

    setFormIsValid(
      event.target.value.trim().length > 6 && emailState.isVaild
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type:'INPUT_BLUR'});
  };

  const validateCollegeHandler = () => {
    setCollegenameIsValid(enteredCollegename.trim().length > 3);
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type:'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isVaild === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
          
        <div
          className={`${classes.control} ${
            collegenameIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="collegename">College Name</label>
          <input
            type="collegename"
            id="collegename"
            value={enteredCollegename}
            onChange={collegeChangeHandler}
            onBlur={validateCollegeHandler}
          />
        </div>

        <div
          className={`${classes.control} ${
            passwordState.isVaild === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
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
