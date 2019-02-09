import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import StatList from '../StatList/StatList';
// import Grid from '@material-ui/core/Grid';
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
	const charBio = props.bio;

	return (
		<div>
			<button href='/hero' onClick={props.goToResult}>
				<div>Back</div>
			</button>
			<br />

			<img
				src={charBio.img_md ? charBio.img_md : charBio.image.super_url}
				alt={charBio.img_md}
			/>

			<h1>Name: {charBio.name}</h1>
			<p>{charBio.deck}</p>
			<h2>Real Name: {charBio.real_name ? charBio.real_name : 'Unknown'}</h2>
			{charBio.combat ? <StatList charBio={charBio} /> : null}
			<br />
			<a href={charBio.site_detail_url} target='blank'>
				{charBio.name} bio.
			</a>
		</div>
	);
}
Bio.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bio);
