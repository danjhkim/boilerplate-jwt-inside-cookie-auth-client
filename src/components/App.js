import React from 'react';
import Header from './Header';
import Welcome from './Welcome';
import Signup from './Auth/Signup';
import Feature from './Feature';
import Signout from './Auth/Signout';
import Signin from './Auth/Signin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RequireAuth from './RequireAuth';
import CheckUserExist from './Auth/CheckUserExist';

const App = () => {
	CheckUserExist();
	return (
		<Router>
			<div className='App'>
				<Header />
				<div className='content'>
					<Routes>
						<Route exact path='/' element={<Welcome />} />
						<Route exact path='/signup' element={<Signup />} />
						<Route
							exact
							path='/feature'
							element={
								<RequireAuth>
									<Feature />
								</RequireAuth>
							}
						/>
						<Route exact path='/signout' element={<Signout />} />
						<Route exact path='/signin' element={<Signin />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
};

export default App;
