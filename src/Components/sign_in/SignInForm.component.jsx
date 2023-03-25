import React from 'react';
import { useState } from 'react';
import FormInput from '../formInput/FormInput.component';
import './SignInForm.styles.scss';

import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
	signInWithGooglePopup,
	signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/Button.component';

const default_feilds = {
	email: '',
	password: '',
};

function SignInForm() {
	const [formFeilds, setFormFeilds] = useState(default_feilds);
	const { email, password } = formFeilds;

	const rest_form_feilds = () => {
		setFormFeilds(default_feilds);
	};

	const change_handler = (event) => {
		const { name, value } = event.target;
		setFormFeilds({ ...formFeilds, [name]: value });

		console.log(formFeilds);
	};

	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserDocumentFromAuth(user);
	};

	const submit_handler = async (event) => {
		event.preventDefault();

		try {
			const response = await signInAuthUserWithEmailAndPassword(
				email,
				password
			);
			console.log(response);
			rest_form_feilds();
		} catch (error) {}
	};

	return (
		<div className="sign-up-container">
			<h2>Already have an account?</h2>
			<span>sign in with your email and password</span>
			<form onSubmit={submit_handler}>
				<FormInput
					label="Email"
					type="email"
					required
					name="email"
					onChange={change_handler}
					value={email}
				/>

				<FormInput
					label="Password"
					type="password"
					required
					name="password"
					onChange={change_handler}
					value={password}
				/>

				<div className="buttons-container">
					<Button buttonType="" type="submit">
						sign in
					</Button>
					<Button buttonType="google" onClick={signInWithGoogle}>
						Google sign in
					</Button>
				</div>
			</form>
		</div>
	);
}

export default SignInForm;
