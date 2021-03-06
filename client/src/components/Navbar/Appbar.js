import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import AuthService from '../AuthService';

const styles = theme => ({
	root: {
		width: '100%',
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
	appColor: {
		backgroundColor: '#000000',
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	inputRoot: {
		color: 'inherit',
		width: '100%',
	},
	inputInput: {
		paddingTop: theme.spacing.unit,
		paddingRight: theme.spacing.unit,
		paddingBottom: theme.spacing.unit,
		paddingLeft: theme.spacing.unit * 10,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: 200,
		},
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
});

class PrimarySearchAppBar extends React.Component {
	constructor(props) {
		super(props);

		this.Auth = new AuthService();
	}
	state = {
		search: '',
		anchorEl: null,
		mobileMoreAnchorEl: null,
	};

	handleProfileMenuOpen = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleMenuClose = () => {
		this.setState({ anchorEl: null });
		this.handleMobileMenuClose();
	};

	handleMobileMenuOpen = event => {
		this.setState({ mobileMoreAnchorEl: event.currentTarget });
	};

	handleMobileMenuClose = () => {
		this.setState({ mobileMoreAnchorEl: null });
	};

	render() {
		const { anchorEl, mobileMoreAnchorEl } = this.state;
		const { classes } = this.props;
		const isMenuOpen = Boolean(anchorEl);
		const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

		const renderMenu = (
			<Menu
				anchorEl={anchorEl}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				transformOrigin={{ vertical: 'top', horizontal: 'right' }}
				open={isMenuOpen}
				onClose={this.handleMenuClose}>
				<MenuItem onClick={this.handleMenuClose}>
					<Link className='nav-link' to='/profile'>
						Profile
					</Link>
				</MenuItem>
				<MenuItem onClick={this.handleMenuClose}>
					{this.Auth.loggedIn() ? (
						<a className='nav-link' href='/' onClick={() => this.Auth.logout()}>
							Logout
						</a>
					) : (
						<ul className='navbar-nav'>
							<li className='nav-item'>
								<Link className='nav-link' to='/signup'>
									Signup
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to='/login'>
									Login
								</Link>
							</li>
						</ul>
					)}
				</MenuItem>
			</Menu>
		);

		const renderMobileMenu = (
			<Menu
				anchorEl={mobileMoreAnchorEl}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				transformOrigin={{ vertical: 'top', horizontal: 'right' }}
				open={isMobileMenuOpen}
				onClose={this.handleMenuClose}>
				<MenuItem onClick={this.handleMobileMenuClose}>
					<IconButton color='inherit'>
						<Link to='/hero'>
							<NotificationsIcon />
						</Link>
					</IconButton>
					<p>Hero Search</p>
				</MenuItem>
				<MenuItem onClick={this.handleProfileMenuOpen}>
					<IconButton color='inherit'>
						<AccountCircle />
					</IconButton>
					<p>Profile</p>
				</MenuItem>
			</Menu>
		);

		return (
			<div className={classes.root}>
				<AppBar position='static' className={classes.appColor}>
					<Toolbar>
						<Typography
							className={classes.title}
							variant='h6'
							color='inherit'
							noWrap>
							Hero Search
						</Typography>

						<div className={classes.grow} />
						<div className={classes.sectionDesktop}>
							<IconButton color='inherit'>
								<Link to='/hero'>
									<NotificationsIcon />
								</Link>
							</IconButton>
							<IconButton
								aria-owns={isMenuOpen ? 'material-appbar' : undefined}
								aria-haspopup='true'
								onClick={this.handleProfileMenuOpen}
								color='inherit'>
								<AccountCircle />
							</IconButton>
						</div>
						<div className={classes.sectionMobile}>
							<IconButton
								aria-haspopup='true'
								onClick={this.handleMobileMenuOpen}
								color='inherit'>
								<MoreIcon />
							</IconButton>
						</div>
					</Toolbar>
				</AppBar>
				{renderMenu}
				{renderMobileMenu}
			</div>
		);
	}
}

PrimarySearchAppBar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimarySearchAppBar);
