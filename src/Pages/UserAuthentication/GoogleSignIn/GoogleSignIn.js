import React from 'react';
import './GoogleSignIn.css'
import google_icon from '../../../images/google_icon.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';


const GoogleSignIn = () => {
    let errorElement;



    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    console.log(user)



    return (
        <div>
            {errorElement}
            <button onClick={() => signInWithGoogle()}
                className='btn mx-auto my-2 googlelogin-btn'>
                <img src={google_icon} alt="" />
                <span className='px-2'>Login Using Google Account</span>
            </button>
        </div>
    );
};

export default GoogleSignIn;