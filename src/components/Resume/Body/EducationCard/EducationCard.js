import React from 'react';

const EducationCard = props => (
	<div className="resume--body--education--card">
		<div className="resume--body--education--card--header">
			<i className="fa fa-graduation-cap" aria-hidden="true" />
			<h1>{props.name}</h1>
		</div>
		<div className="resume--body--education--card--details">
			<div className="resume--body--education--card--dates">
				<div className="resume--body--education--start--date">
					<p className="resume--body--education--dates--title">Start Year</p>
					<p> {props.startYear}</p>
				</div>
				<div className="resume--body--education--end--year">
					<p className="resume--body--education--dates--title">End Year</p>
					<p>{props.endYear}</p>
				</div>
			</div>
			<div className="resume--body--education--spacer" />
			<div className="resume--body--education--card--university">
				<img src={props.img} className="resume--body--education--card--image" />
				<p>{props.institution}</p>
			</div>
		</div>
	</div>
);

export default EducationCard;
