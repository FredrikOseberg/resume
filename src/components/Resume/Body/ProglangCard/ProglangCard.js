import React from 'react';

const ProglangCard = props => (
	<div className="resume--body--proglang--card">
		<div className="resume--body--proglang--card--wrapper">
			<div className="resume--body--proglang--card--image">
				<img src={props.img} alt={props.name} />
			</div>
			<div className="resume--body--proglang--card--name">
				<p>{props.name}</p>
			</div>
			<i className="fa fa-chevron-down" aria-hidden="true" />
		</div>
		<div className="resume--body--proglang--card--details" />
	</div>
);

export default ProglangCard;
