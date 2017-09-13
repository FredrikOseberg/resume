import React from 'react';

const LanguageCard = props => (
	<div className="resume--language--card">
		<div className="resume--language--card--name">
			<img src={props.img} alt={`${props.lang}-language`} className="resume--language--card--image" />
			<h4>{props.lang}</h4>
		</div>
		<div className="resume--language--card--level">
			<p>Level: {props.level}</p>
		</div>
		<i className="fa fa-check" aria-hidden="true" />
	</div>
);

export default LanguageCard;
