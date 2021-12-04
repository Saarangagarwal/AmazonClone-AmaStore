import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import { auth } from './firebase'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

        //firebase sign
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = (e) => {
        e.preventDefault();

        //firebase register
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //successfully created a new user
                console.log(auth);
                if(auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                 <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
            </Link>

            <div className='login__container'>
                <h1>Sign in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p> By signing in, you agree to our terms and conditions of use. Note: This is a side project for eductional
                    purposes only. There is no intention to interfere with Amazon or anyone else. Please use the website at 
                    your own risk.
                </p>

                <button onClick={register} className='login__registerInButton'>Create your AmaStore Account</button>

            </div>

        </div>
    )
}

export default Login
