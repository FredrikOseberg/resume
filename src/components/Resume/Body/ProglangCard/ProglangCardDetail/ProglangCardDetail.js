import React from 'react';

const ProglangCardDetail = props => {
	let progressColor;
	if (props.rating >= 50) {
		progressColor = '#4fe85a';
	} else if (props.rating >= 30) {
		progressColor = '#f38d35';
	} else {
		progressColor = '#ff5f5f';
	}
	const progressBarWidth = {
		width: `${props.rating}%`,
		backgroundColor: `${progressColor}`
	};
	return (
		<div className="resume--body--proglang--card--detail">
			<p>{props.name}</p>
			<div className="resume--body--proglang--card--detail progress--bar">
				<div className="resume--body--proglang--card--detail progress--bar--filler" style={progressBarWidth} />
			</div>
		</div>
	);
};

export default ProglangCardDetail;
