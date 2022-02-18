import React from 'react';

import FormUser from '../Forms/FormUser';

const Signup = () => {
	return (
		<div>
			<FormUser title='Sign up' signingup={true} upOrIn='Sign up' />
		</div>
	);
};

export default Signup;
