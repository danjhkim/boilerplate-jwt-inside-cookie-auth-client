import React from 'react';

import FormUser from '../Forms/FormUser';

const Signin = () => {
	return (
		<div>
			<FormUser title='Sign in' signingup={false} upOrIn='Sign in' />
		</div>
	);
};

export default Signin;
