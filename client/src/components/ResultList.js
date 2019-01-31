import React from "react";
// `${result.image.medium_url}`
// `${result.thumbnail.path}/portrait_xlarge.${result.thumbnail.extension}`
function ResultList(props) {
	
	// src={`${result.thumbnail.path}/portrait_xlarge.${result.thumbnail.extension}`}
  return (
    <ul className="list-group" style={{listStyleType:'none'}}>
      {props.results.map(result => (
        <li className="list-group-item" key={result.id}>
          <img alt={result.name} className="img-fluid"  src={result.image.small_url}/>
		      <h1>{result.name}</h1>
		      <p>{result.deck}</p>
			<h2>Some Stats</h2>
			<ul>
				<li>
					<p key={props.stats.strength}>{`Combat: ${props.stats.combat}`}</p>
				</li>
				<li>
					<p key={props.stats.strength}>{`Intelligence: ${props.stats.intelligence}`}</p>
				</li>
				<li>
					<p key={props.stats.strength}>{`Durability: ${props.stats.durability}`}</p>
				</li>
				<li>
					<p key={props.stats.strength}>{`Power: ${props.stats.power}`}</p>
				</li>
				<li>
					<p key={props.stats.strength}>{`Speed: ${props.stats.speed}`}</p>
				</li>
				<li>
					<p key={props.stats.strength}>{`S	trength: ${props.stats.strength}`}</p>
				</li>
			</ul>
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
