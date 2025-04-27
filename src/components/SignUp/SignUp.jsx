import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase.init';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';

const SignUp = () => {
    const [success,setSuccess] = useState(false);
    const [errorMessage,setErrorMessage] =useState('')
    const [showPassword,setShowPassword] = useState(false);

    const handleSignUp = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password =e.target.password.value;
        const terms =e.target.terms.checked;
        console.log(email,password,terms);


        setSuccess(false);
        setErrorMessage('');

        if(!terms){
            setErrorMessage('Please accepts Our Terms and Conditions');
            return 
        }

        //password validate
        const passwordRegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
       if(passwordRegExp.test(password)===false){
        setErrorMessage('Password must have one lower case , one uppercase,one digit and 6 characters or longer. ')
        return ;
       }

        //create user
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result);
            setSuccess(true);
        })
        .catch(error =>{
            console.log(error)
            setErrorMessage(error.message)
        })
    }
    return (
       
          
          <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
            <h1 className="text-3xl font-bold">Please Sign Up now!</h1>
              <form onSubmit={handleSignUp}>
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />
                <label className="label mt-4">Password</label>
                <div className='relative'>
                <input type={showPassword ? 'text': 'password'}
                    name='password'
                     className="input" 
                     placeholder="Password" />
                <button onClick={() =>{setShowPassword(!showPassword)}} className='btn btn-xs absolute top-2 right-6'>
                    {
                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                    }
                    </button>
                </div>
                <div><a className="link link-hover">Forgot password?</a></div>
                <label className="label mt-2">
    <input type="checkbox" name="terms" defaultChecked className="checkbox" />
    Accept Terms and Conditions
  </label> 

  <br />
                <button className="btn btn-neutral mt-4">Sign Up</button>
              </form>

              <p>Already have an account? Please <Link className="text-blue-400 underline" to="/login">Login</Link></p>
              {
                errorMessage && <p className='text-red-500'>{errorMessage}</p>
              }
              {
                success && <p className='text-green-500'>User has created successfully</p>
              }
            </div>
          </div>
       
    );
};

export default SignUp;