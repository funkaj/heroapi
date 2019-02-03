import React from "react";
import Grid from '@material-ui/core/Grid';
import './ResultList.css';
// `${result.image.medium_url}`
// `${result.thumbnail.path}/portrait_xlarge.${result.thumbnail.extension}`
function ResultList(props) {
	console.log(props)
	// src={`${result.thumbnail.path}/portrait_xlarge.${result.thumbnail.extension}`}
	return (
		<div>
			<ul className="list-group" style={{listStyleType:'none'}}	>
				<Grid container>
    			{props.stats.map(result => (
					<Grid item xs={6}>
						<li className="list-group-item" key={result.id}>
    						<img alt={result.name} className="img-fluid"  	src={result.image.small_url}/>
				    		<h1>{result.name}</h1>
				    		<p>{result.deck}</p>
							<h2>Some Stats</h2>	
								<ul style={{listStyleType:'none'}}>
									<Grid container>
										<Grid item xs={2}>
											<li className="list-group-item circle" key={result.stats.index}>
												<p>{`Combat: ${result.stats.combat}`}</p>
											</li>
										</Grid>
										<Grid item xs={2}>
											<li className="list-group-item circle" key={result.stats.intelligence}>
												<p>{`Intelligence: ${result.stats.intelligence}	`}	</p>
											</li>
										</Grid>
										<Grid item xs={2}>
											<li className="list-group-item circle" key={result.stats.durability}>
												<p>{`Durability: ${result.stats.durability}`}	</p>
											</li>
										</Grid>
										<Grid item xs={2}>
											<li className="list-group-item circle" key={result.stats.power}>
												<p>{`Power: ${result.stats.power}`}</p>
											</li>
										</Grid>
										<Grid item xs={2}>
											<li className="list-group-item circle" key={result.stats.speed}>
												<p>{`Speed: ${result.stats.speed}`}</p>
											</li>
										</Grid>
										<Grid item xs={2}>
											<li className="list-group-item circle" key={result.stats.strength}>
												<p>{`Strength: ${result.stats.strength}`}</p>
											</li>
										</Grid>
									</Grid>
								</ul>	
    		    		</li>
					</Grid>
    			))}
				</Grid>
    		</ul>
		</div>
	);
};

export default ResultList;
