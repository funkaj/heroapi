import React from "react";
import Grid from '@material-ui/core/Grid';
import './ResultList.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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
			<ul className="list-group" style={{listStyleType:'none'}}	>
				<Grid container>
    			{props.stats.map(result => (
					<Grid item xs={12} md={6} >
						<Card className={classes.card}>
						<CardContent>
						<li className="list-group-item hero" key={result.id}>
    						<img alt={result.name} className="img-fluid"  	src={result.image.small_url}/>
								<p>{result.publisher.name}</p>
				    		<h1>{result.name}</h1>
				    		<p>{result.deck}</p>
							<h2>Some Stats</h2>	
								<ul style={{listStyleType:'none'}}>
									<Grid container spacing={16} className="stat-bar">
										<Grid item xs={2} className="stat-item">
											<li className="list-group-item" key={result.stats.index}>
												<p>{`Combat: ${result.stats.combat}`}</p>
											</li>
										</Grid>
										<Grid item xs={2} className="stat-item">
											<li className="list-group-item" key={result.stats.intelligence}>
												<p>{`Intelligence: ${result.stats.intelligence}	`}	</p>
											</li>
										</Grid>
										<Grid item xs={2} className="stat-item">
											<li className="list-group-item" key={result.stats.durability}>
												<p>{`Durability: ${result.stats.durability}`}	</p>
											</li>
										</Grid>
										<Grid item xs={2} className="stat-item">
											<li className="list-group-item" key={result.stats.power}>
												<p>{`Power: ${result.stats.power}`}</p>
											</li>
										</Grid>
										<Grid item xs={2} className="stat-item">
											<li className="list-group-item" key={result.stats.speed}>
												<p>{`Speed: ${result.stats.speed}`}</p>
											</li>
										</Grid>
										<Grid item xs={2} className="stat-item">
											<li className="list-group-item" key={result.stats.strength}>
												<p>{`Strength: ${result.stats.strength}`}</p>
											</li>
										</Grid>
									</Grid>
								</ul>	
    		    		</li>
						</CardContent>
						</Card>
					</Grid>
    			))}
				</Grid>
    		</ul>
		</div>
	);
};

ResultList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResultList);
