import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './HeaderStyle.css';

const Header = () => {
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
			<Link to='/feature'>Feature</Link>
			<button onClick={axiosCall}>test</button>
		</div>
	);
};

export default Header;
