import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {emailSignInStart} from "../../redux/user/user.actions";
import {googleSignInStart} from "../../redux/user/user.actions";
import {connect} from "react-redux";

class SignIn extends React.Component {
    constructor(props){
        super(props);

            this.state= {
                email: "",
                password:""
            }  
    }
    handleChange = event =>{
        const {value, name} = event.target;
        this.setState({[name]:value});
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const {emailSignInStart} = this.props;
        const {email, password} = this.state;

        emailSignInStart(email, password);

    };


    render(){
        const {googleSignInStart} = this.props;
        return(
        <div className="signin">
            <h2> I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit= {this.handleSubmit}>
                <FormInput 
                    name="email" 
                    value={this.state.email} 
                    required 
                    type="email"
                    handleChange ={this.handleChange}
                    label= "Email"
                    />
              
                <FormInput 
                    name= "password" 
                    value={this.state.password} 
                    required 
                    type="password" 
                    handleChange ={this.handleChange}
                    label="Password" 

                    />
                <div className ="buttons">
                <CustomButton type= "submit">Sign In</CustomButton>
                <CustomButton type= "button" isGoogleSignIn  onClick = {googleSignInStart}>Sign in with Google</CustomButton>
                </div>
            </form>


        </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);