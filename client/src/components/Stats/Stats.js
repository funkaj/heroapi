import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	card: {
		minWidth: 275,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
};

// function getstats(props) {
// 	props.stats.forEach(stat => {
// 		if (stat.name === props.result.name) {
// 			return (
// 				<div>
// 					<h2>Some Stats</h2>
// 					<ul style={{ listStyleType: 'none' }}>
// 						<Grid container spacing={16} className='stat-bar'>
// 							<Grid item xs={2} className='stat-item'>
// 								<li className='list-group-item'>
// 									<p>{`Combat: ${stat.name}`}</p>
// 								</li>
// 							</Grid>
// 						</Grid>
// 					</ul>
// 				</div>
// 			);
// 		}
// 	});
// }
function Stats(props) {
	const { classes } = props;

	props.stats.forEach(stat => {
		if (stat.name === props.result.name) {
			return (
				<div>
					<h2>Some Stats</h2>
					<ul style={{ listStyleType: 'none' }}>
						<Grid container spacing={16} className='stat-bar'>
							<Grid item xs={2} className='stat-item'>
								<li className='list-group-item'>
									<p>{`Combat: ${stat.name}`}</p>
								</li>
							</Grid>
						</Grid>
					</ul>
				</div>
			);
		}
	});
}

Stats.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Stats);

// {/* <Grid item xs={2} className='stat-item'>
//     <li className='list-group-item' key={newStats.stats.intelligence}>
//         <p>{`Intelligence: ${newStats.stats.intelligence}`} </p>
//     </li>
// </Grid>
// <Grid item xs={2} className='stat-item'>
//     <li className='list-group-item' key={newStats.stats.durability}>
//         <p>{`Durability: ${newStats.stats.durability}`} </p>
//     </li>
// </Grid>
// <Grid item xs={2} className='stat-item'>
//     <li className='list-group-item' key={newStats.stats.power}>
//         <p>{`Power: ${newStats.stats.power}`}</p>
//     </li>
// </Grid>
// <Grid item xs={2} className='stat-item'>
//     <li className='list-group-item' key={newStats.stats.speed}>
//         <p>{`Speed: ${newStats.stats.speed}`}</p>
//     </li>
// </Grid>
// <Grid item xs={2} className='stat-item'>
//     <li className='list-group-item' key={newStats.stats.strength}>
//         <p>{`Strength: ${newStats.stats.strength}`}</p>
//     </li>
// </Grid> */}
