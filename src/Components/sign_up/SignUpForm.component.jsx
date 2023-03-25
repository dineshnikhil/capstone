import React from 'react';
import { useState } from 'react';
import FormInput from '../formInput/FormInput.component';
import './SignUpForm.styles.scss';

import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/Button.component';

const default_feilds = {
	displayName: '',
	email: '',
	password: '',
	confirm_password: '',
};

function SignUpForm() {
	const [formFeilds, setFormFeilds] = useState(default_feilds);
	const { displayName, email, password, confirm_password } = formFeilds;

	const change_handler = (event) => {
		const { name, value } = event.target;
		setFormFeilds({ ...formFeilds, [name]: value });

		console.log(formFeilds);
	};

	const submit_handler = async (event) => {
		event.preventDefault();

		if (password != confirm_password) {
			alert('password donot match!');
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);

			await createUserDocumentFromAuth(user, { displayName });
		} catch (error) {
			if (error.code == 'auth/email-already-in-use') {
				alert('cannot create user, email already exists!');
			} else {
				console.log('user got an error : ' + error);
			}
		}
	};

	return (
		<div className="sign-up-container">
			<h2>Don't have an account?</h2>
			<span>sign up with your email and password</span>
			<form onSubmit={submit_handler}>
				<FormInput
					label="Display Name"
					type="text"
					required
					name="displayName"
					onChange={change_handler}
					value={displayName}
				/>

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

				<FormInput
					label="ConfirmPassword"
					type="password"
					required
					name="confirm_password"
					onChange={change_handler}
					value={confirm_password}
				/>

				<Button buttonType="" type="submit">
					sign up
				</Button>
			</form>
		</div>
	);
}

export default SignUpForm;
