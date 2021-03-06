import React, {useState} from "react";
import SigninStyled from "./sign-in.styles";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {emailSignInStart} from "../../redux/user/user.actions";
import {googleSignInStart} from "../../redux/user/user.actions";
import {connect} from "react-redux";

const SignIn = ({emailSignInStart, googleSignInStart}) => {
    const [userCredentials, setCredentials] = useState({email: "", password: ""});

    const handleChange = event =>{
        const {value, name} = event.target;
        setCredentials({...userCredentials, [name]:value});
    }
    const { email, password} = userCredentials;
    const handleSubmit = async event =>{
        event.preventDefault();
        
        const {email, password} = userCredentials;

        emailSignInStart(email, password);

    };


       
        
        return(
        <SigninStyled>
            <h2> I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit= {handleSubmit}>
                <FormInput 
                    name="email" 
                    value={email} 
                    required 
                    type="email"
                    handleChange ={handleChange}
                    label= "Email"
                    />
              
                <FormInput 
                    name= "password" 
                    value={password} 
                    required 
                    type="password" 
                    handleChange ={handleChange}
                    label="Password" 

                    />
                <div className ="buttons">
                <CustomButton type= "submit">Sign In</CustomButton>
                <CustomButton type= "button" isGoogleSignIn  onClick = {googleSignInStart}>Sign in with Google</CustomButton>
                </div>
            </form>


            </SigninStyled>
        )
    };


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);