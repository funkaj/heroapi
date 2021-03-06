import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Appbar from './components/Navbar/Appbar';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
// Our Components
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Hero from './components/SearchResultContainer';

// ReactDOM.render(<App />, document.getElementById('root'));

// Here is if we have an id_token in localStorage
if (localStorage.getItem('id_token')) {
	// then we will attach it to the headers of each request from react application via axios
	axios.defaults.headers.common[
		'Authorization'
	] = `Bearer ${localStorage.getItem('id_token')}`;
}
ReactDOM.render(
	<Router>
		<div>
			<Appbar />
			<div className='main-margin'>
				<Route exact path='/' component={Hero} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/signup' component={Signup} />
				<Route exact path='/profile' component={Profile} />
			</div>
		</div>
	</Router>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();

registerServiceWorker();
