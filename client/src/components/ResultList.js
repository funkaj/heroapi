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
            {/* {result.urls.map(res => (
              <a href={res.url} key={res.type}>{`${res.type} | `}</a>
            ))} */}
		      <h2>Some Comics</h2>
			  <ul style={{listStyleType:'none'}}>
				  <li>
		        <p key={result.name}>{`${result.first_appeared_in_issue.issue_number}`}</p>
				  </li>
			  </ul>
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
