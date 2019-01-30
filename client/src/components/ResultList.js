import React from "react";
// `${result.image.medium_url}`
// `${result.thumbnail.path}/portrait_xlarge.${result.thumbnail.extension}`
function ResultList(props) {
	
  return (
    <ul className="list-group" style={{listStyleType:'none'}}>
      {props.results.map(result => (
        <li className="list-group-item" key={result.id}>
          <img alt={result.name} className="img-fluid" src={`${result.thumbnail.path}/portrait_xlarge.${result.thumbnail.extension}`} />
		      <h1>{result.name}</h1>
		      <p>{`${result.description}`}</p>
            {result.urls.map(res => (
              <a href={res.url} key={res.type}>{`${res.type} | `}</a>
            ))}
		      <h2>Some Comics</h2>
			  <ul style={{listStyleType:'none'}}>
				  <li>
		        	{result.comics.items.map(res => (
		          		<p key={res.name}>{`${res.name}`}</p>
				  ))}
				  </li>
			  </ul>
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
