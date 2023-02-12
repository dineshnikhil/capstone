import React from 'react'
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

const SignIn = () => {

    const logWithGoogle = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }

    return(
        <div>
            <h1>sing in form.</h1>
            <button onClick={logWithGoogle}>
                sign in with google
            </button>
        </div>
    )
}

export default SignIn;