import React from 'react';

function PortfolioItem(props) {
  return (
    <div>
        <h5>{props.title}</h5>
        <img src={props.src} alt={props.title} />
        <a href={props.github} target='_blank'>Link to Github</a>
        <a href={props.app} target='_blank'>Link to App</a>

    </div>
  );
}

export default PortfolioItem;