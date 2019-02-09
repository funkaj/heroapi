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
							<p key={props.charBio.combat}>{`Combat: ${
								props.charBio.combat ? props.charBio.combat : '-'
							}`}</p>
						</li>
					</Grid>
					<Grid item xs={2} className='stat-item'>
						<li className='list-group-item'>
							<p key={props.charBio.intelligence}>
								{`Intelligence: ${
									props.charBio.intelligence ? props.charBio.intelligence : '-'
								}`}{' '}
							</p>
						</li>
					</Grid>
					<Grid item xs={2} className='stat-item'>
						<li className='list-group-item'>
							<p key={props.charBio.durability}>
								{`Durability: ${
									props.charBio.durability ? props.charBio.durability : '-'
								}`}{' '}
							</p>
						</li>
					</Grid>
					<Grid item xs={2} className='stat-item'>
						<li className='list-group-item'>
							<p key={props.charBio.power}>{`Power: ${
								props.charBio.power ? props.charBio.power : '-'
							}`}</p>
						</li>
					</Grid>
					<Grid item xs={2} className='stat-item'>
						<li className='list-group-item'>
							<p key={props.charBio.speed}>{`Speed: ${
								props.charBio.speed ? props.charBio.speed : '-'
							}`}</p>
						</li>
					</Grid>
					<Grid item xs={2} className='stat-item'>
						<li className='list-group-item'>
							<p key={props.charBio.strength}>{`Strength: ${
								props.charBio.strength ? props.charBio.strength : '-'
							}`}</p>
						</li>
					</Grid>
				</Grid>
			</ul>
		</div>
	);
}

export default StatList;
