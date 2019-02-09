import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
// // import tileData from './tileData';
// import { Link } from '@material-ui/core';

const styles = theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
	},
});

function Bio(props) {
	console.log(props);

	return (
		<button href='/hero' onClick={props.goToResult}>
			<div>Bio</div>
		</button>
	);
}
Bio.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bio);
