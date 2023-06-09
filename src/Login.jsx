import React, { useState } from 'react';
import './Login.css';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';



function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePicl] = useState('')
    const dispatch = useDispatch();


    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL,

            }))
        } ).catch(error => alert(error))
        
    }
    
    
    const register = () => {
        
        if(!name){
                return alert('Please Enter full name!')
            }
            

        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic,
                }));
            });
        })
        .catch(error => alert(error))

        
    };

    return (
    <div className='login'>
        <img src="data:image/png;base64,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" alt=" LinkedIn Login Page Logo " />

        <form >
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder='Full Name (required if registring'
            />
            <input
                value={profilePic}
                onChange={(e) => setProfilePicl(e.target.value)}
                type="text"
                placeholder='profilepic URL ( Optional)' 
            />
            <input
                value={email}
                onChange={(e) => setEmail (e.target.value)}
                type="email"
                placeholder='Email'
            />
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder='Password'/>
            <button type='submit' onClick={loginToApp}>Sign in</button>
        </form>

        <p>
            Not a memebr?{" "}
            <span className='login_register' onClick={register}>Register now</span>
            </p>
    </div>
    )
}

export default Login




