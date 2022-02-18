import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './HeaderStyle.css';

const Header = () => {
	const auth = useSelector(state => state.auth);
	const ax = axios.create({
		baseURL: 'http://localhost:3090',
		withCredentials: true,
	});
	const axiosCall = async () => {
		const response = await ax.get('/test');
		console.log(response);
	};

	return (
		<div className='header'>
			<Link to='/'>Home</Link>
			<Link to='/signup'>Sign Up</Link>
			<Link to='/signin'>Sign In</Link>
			<Link to='/signout'>Sign Out</Link>
			{auth ? <Link to='/feature'>Feature</Link> : null}
			<button onClick={axiosCall}>test</button>
		</div>
	);
};

export default Header;
