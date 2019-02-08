import React from 'react';
import Grid from '@material-ui/core/Grid';

function StatList(props) {
	console.log(props);
	return (
		<div>
			<h2>Some Stats</h2>
			<ul style={{ listStyleType: 'none' }}>
				<Grid container spacing={16} className='stat-bar'>
					<Grid item xs={2} className='stat-item'>
						<li className='list-group-item'>
							<p key={props.res.combat}>{`Combat: ${
								props.res.combat ? props.res.combat : '-'
							}`}</p>
						</li>
					</Grid>
					<Grid item xs={2} className='stat-item'>
						<li className='list-group-item'>
							<p key={props.res.intelligence}>
								{`Intelligence: ${
									props.res.intelligence ? props.res.intelligence : '-'
								}`}{' '}
							</p>
						</li>
					</Grid>
					<Grid item xs={2} className='stat-item'>
						<li className='list-group-item'>
							<p key={props.res.durability}>
								{`Durability: ${
									props.res.durability ? props.res.durability : '-'
								}`}{' '}
							</p>
						</li>
					</Grid>
					<Grid item xs={2} className='stat-item'>
						<li className='list-group-item'>
							<p key={props.res.power}>{`Power: ${
								props.res.power ? props.res.power : '-'
							}`}</p>
						</li>
					</Grid>
					<Grid item xs={2} className='stat-item'>
						<li className='list-group-item'>
							<p key={props.res.speed}>{`Speed: ${
								props.res.speed ? props.res.speed : '-'
							}`}</p>
						</li>
					</Grid>
					<Grid item xs={2} className='stat-item'>
						<li className='list-group-item'>
							<p key={props.res.strength}>{`Strength: ${
								props.res.strength ? props.res.strength : '-'
							}`}</p>
						</li>
					</Grid>
				</Grid>
			</ul>
		</div>
	);
}

export default StatList;
