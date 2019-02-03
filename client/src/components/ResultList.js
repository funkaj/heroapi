import React from "react";
// `${result.image.medium_url}`
// `${result.thumbnail.path}/portrait_xlarge.${result.thumbnail.extension}`
function ResultList(props) {
	console.log(props)
	// src={`${result.thumbnail.path}/portrait_xlarge.${result.thumbnail.extension}`}
  return (
		<ul className="list-group" style={{listStyleType:'none'}}>
      {props.stats.map(result => (
				
				<li className="list-group-item" key={result.id}>
          <img alt={result.name} className="img-fluid"  src={result.image.small_url}/>
		      <h1>{result.name}</h1>
		      <p>{result.deck}</p>
				<h2>Some Stats</h2>	
					<ul>
						<li className="list-group-item" key={result.stats.index}>
							<p>{`Combat: ${result.stats.combat}`}</p>
						</li>
						<li className="list-group-item" key={result.stats.intelligence}>
							<p>{`Intelligence: ${result.stats.intelligence}`}</p>
						</li>
						<li className="list-group-item" key={result.stats.durability}>
							<p>{`Durability: ${result.stats.durability}`}</p>
						</li>
						<li className="list-group-item" key={result.stats.power}>
							<p>{`Power: ${result.stats.power}`}</p>
						</li>
						<li className="list-group-item" key={result.stats.speed}>
							<p>{`Speed: ${result.stats.speed}`}</p>
						</li>
						<li className="list-group-item" key={result.stats.strength}>
							<p>{`Strength: ${result.stats.strength}`}</p>
						</li>
					</ul>	
        </li>
      ))}
    </ul>
  );
};

export default ResultList;
