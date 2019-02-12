import React, { Component } from 'react';
import pelephant from './pelephant.svg';
import AuthService from './components/AuthService';
import withAuth from './components/withAuth';
import './App.css';

const Auth = new AuthService();

class App extends Component {
	handleLogout = () => {
		Auth.logout();
		this.props.history.replace('/signup');
	};

	goToHeroSearch = () => {
		this.props.history.replace('/hero');
	};

	render() {
		console.log(process.env.REACT_APP_SECRET_CODE);
		return (
			<div className='App'>
				<div className='App-header'>
					<h2>Welcome {this.props.user.email}</h2>
					<img src={pelephant} className='App-logo' alt='logo' />
				</div>
			</div>
		);
	}
}

export default withAuth(App);
