import React from 'react';
import ProglangCardDetail from './ProglangCardDetail/ProglangCardDetail';

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
		<div className="resume--body--proglang--card--details">
			{props.skills.map(skill => {
				console.log('something');
				return (
					<ProglangCardDetail
						name={skill.name}
						rating={skill.rating}
						description={skill.description}
						key={skill.id}
					/>
				);
			})}
		</div>
		<div className="resume--body--proglang--card--summary">
			<h1>Summary</h1>
			<div className="resume--body--proglang--summary--details">
				<p>
					Ready for entry level frontend developer jobs. Good analytical skills. Good knowledge of core
					language. In the process of gaining knowledge of React, redux and webpack.
				</p>
				<i className="fa fa-check" aria-hidden="true" />
			</div>
		</div>
	</div>
);

export default ProglangCard;
