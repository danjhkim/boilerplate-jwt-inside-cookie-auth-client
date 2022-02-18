import React from 'react';
import { useDispatch } from 'react-redux';
import { checkUser } from '../../actions';

const CheckUserExist = () => {
	const dispatch = useDispatch();

	dispatch(checkUser(() => {}));
};

export default CheckUserExist;
