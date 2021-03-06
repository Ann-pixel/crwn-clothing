import  React, {useState} from "react";
import SignupStyled from "./sign-up.styled";
import FormInput from "../form-input/form-input.component";

import CustomButton from "../custom-button/custom-button.component";
import {connect} from "react-redux";
import {signUpStart} from "../../redux/user/user.actions";

const SignUp =({signUpStart}) => {
    const [userCredentials, setCredentials] = useState({displayName:'', email: '', password:'', confirmPassword:''});

    const  {displayName, email, password, confirmPassword} = userCredentials;

   const handleSubmit = async event => {
         event.preventDefault();
         if(password !== confirmPassword){
             alert("Passwords dont match");
             return;
            }
            signUpStart(displayName, email, password);
        }
    const handleChange =  event =>{
        const {name, value} =event.target;
        setCredentials({...userCredentials, [name]:value});   
    } 
return(
    <SignupStyled>
    <h2 className ="title">I do not have an account</h2>
    <span>Sign up with your email password</span>

    <form onSubmit={handleSubmit} className="sign-up-form">

    <FormInput 
    type="text" 
    name="displayName"
    value={displayName}
    handleChange= {handleChange}
    label="Display Name"
    required
    />
        <FormInput 
    type="email" 
    name="email"
    value={email}
    handleChange= {handleChange}
    label="Email"
    required
    />
        <FormInput 
    type="password" 
    name="password"
    value={password}
    handleChange= {handleChange}
    label="Password"
    required
    />
        <FormInput 
    type="password" 
    name="confirmPassword"
    value={confirmPassword}
    handleChange= {handleChange}
    label="Confirm Password"
    required
    />
    <CustomButton type="submit">SIGN UP</CustomButton>


    </form>
    </SignupStyled>
)
}



const mapDispatchToProps = (dispatch) =>({
    signUpStart: (displayName, email, password) => dispatch(signUpStart({displayName, email, password}))
});



export default connect(null, mapDispatchToProps)(SignUp);




