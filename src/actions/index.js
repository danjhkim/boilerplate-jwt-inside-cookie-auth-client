import axios from 'axios';

import { AUTH_USER, AUTH_ERROR } from './types';

const ax = axios.create({
	baseURL: 'https://safe-waters-65346.herokuapp.com',
	withCredentials: true,
});

export const signIn = (data, callback) => async dispatch => {
	try {
		const response = await ax.post('/signin', data);
		console.log(response);
		dispatch({ type: AUTH_USER, payload: response.data.email });
		callback();
	} catch (err) {
		dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
	}
};

//error always has response property
//change repsonse.data.email to token on front end back if u wanna do refresh tokens
//signup and signin and signout
export const signUp = (data, callback) => async dispatch => {
	try {
		const response = await ax.post('/signup', data);
		dispatch({ type: AUTH_USER, payload: response.data.email });
		callback();
	} catch (err) {
		dispatch({ type: AUTH_ERROR, payload: err.response.data.error });
	}
};

export const checkUser = () => async dispatch => {
	try {
		const response = await ax.get('/user');
		dispatch({ type: AUTH_USER, payload: response.data.email });
	} catch (err) {
		dispatch({ type: AUTH_ERROR, payload: err.response.data.error });
	}
};

export const signout = () => async dispatch => {
	await ax.get('/signout');

	dispatch({ type: AUTH_USER, payload: '' });
};
