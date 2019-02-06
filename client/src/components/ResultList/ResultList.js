import React from 'react';
import Grid from '@material-ui/core/Grid';
import './ResultList.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Stats from '../Stats/Stats';

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
function ResultList(props) {
	const { classes } = props;

	return (
		<div>
			<ul className='list-group' style={{ listStyleType: 'none' }}>
				<Grid container>
					{props.results.map(result => (
						<Grid item xs={12} md={6}>
							<Card className={classes.card}>
								<CardContent>
									<li className='list-group-item hero' key={result.id}>
										{/* <img
											alt={result.name}
											className='img-fluid'
											src={result.image.small_url}
										/> */}
										<p>{result.publisher.name}</p>
										<h1>{result.name}</h1>
										<p>{result.deck}</p>
										<Stats result={result} stats={props.stats} />
									</li>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</ul>
		</div>
	);
}

ResultList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResultList);
