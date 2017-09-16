import React from 'react';

const CertProjectDetail = props => {
	let github, codepen;
	props.github
		? (github = (
				<a href={props.github} rel="noopener" target="_blank">
					<i className="fa fa-github" aria-hidden="true" />
				</a>
			))
		: (github = '');
	props.codepen
		? (codepen = (
				<a href={props.codepen} rel="noopener" target="_blank">
					<i className="fa fa-codepen" aria-hidden="true" />
				</a>
			))
		: (codepen = '');
	return (
		<div className="resume--body--certification--project--details">
			<p>{props.name}</p>
			<div className="resume--body--certification--project--details--links">
				{github}
				{codepen}
			</div>
		</div>
	);
};

export default CertProjectDetail;
