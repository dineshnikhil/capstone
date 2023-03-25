import React from 'react';
import SignUpForm from '../../Components/sign_up/SignUpForm.component';
import SignInForm from '../../Components/sign_in/SignInForm.component';

const Authenticate = () => {
	return (
		<div>
			<h1>sing in form.</h1>
			<SignInForm />
			<SignUpForm />
		</div>
	);
};

export default Authenticate;
