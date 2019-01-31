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
				{/* <ul>
					{props.stats.map(stat => (
						<li>
							<p key={stat.strength}>{`Combat: ${stat.combat}`}</p>
						</li>
						<li>
							<p key={stat.strength}>{`Intelligence: ${stat.intelligence}`}</p>
						</li>
						<li>
							<p key={stat.strength}>{`Durability: ${stat.durability}`}</p>
						</li>
						<li>
							<p key={stat.strength}>{`Power: ${stat.power}`}</p>
						</li>
						<li>
							<p key={stat.strength}>{`Speed: ${stat.speed}`}</p>
						</li>
						<li>
							<p key={stat.strength}>{`Strength: ${stat.strength}`}</p>
						</li>
					))}
				</ul> */}
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
