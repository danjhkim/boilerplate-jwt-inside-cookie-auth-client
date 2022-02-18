import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { signUp, signIn } from '../../actions';
import { useNavigate } from 'react-router-dom';

const MyInput = React.forwardRef(({ name, type, label, ...rest }, ref) => {
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<input type={type} name={name} {...rest} ref={ref} />
		</div>
	);
});

const errorSchema = yup
	.object({
		email: yup.string().email().required('Enter email'),
		password: yup
			.string()
			.required('No password provided.')
			.min(8, 'Password is too short - should be 8 chars minimum.')
			.matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
		passwordConfirmation: yup
			.string()
			.oneOf([yup.ref('password'), null], 'Passwords must match'),
	})
	.required();

const Form = ({ title, signingup, upOrIn }) => {
	const dispatch = useDispatch();
	const auth = useSelector(state => state.auth);
	const navigate = useNavigate();

	const onSubmitconsole = data => {
		if (signingup) {
			dispatch(
				signUp(data, () => {
					navigate('/feature');
				}),
			);
		} else if (!signingup) {
			dispatch(
				signIn(data, () => {
					navigate('/feature');
				}),
			);
		}
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(errorSchema),
	});

	return (
		<div>
			{title}
			<form onSubmit={handleSubmit(onSubmitconsole)}>
				<fieldset>
					<MyInput
						name='email'
						label='Enter email: '
						{...register('email')}
						type='input'
					/>
					<p>{errors.email?.message}</p>
				</fieldset>
				<fieldset>
					<MyInput
						name='password'
						label='Enter password: '
						{...register('password')}
						type='password'
					/>
					<p>{errors.password?.message}</p>
				</fieldset>
				{signingup && (
					<fieldset>
						<MyInput
							name='passwordConfirmation'
							label='Re-enter password: '
							{...register('passwordConfirmation')}
							type='password'
						/>
						<p>{errors.passwordConfirmation?.message}</p>
					</fieldset>
				)}

				<div>{auth.errorMessage}</div>
				<button className='ui button primary'>{upOrIn}</button>
			</form>
		</div>
	);
};

export default Form;
