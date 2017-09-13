import React from 'react';

const Bio = props => (
	<div className="resume--bio">
		<div className="resume--bio--card">
			<img className="resume--bio--image" src={props.userData.image} alt={`${props.userData.name}`} />
			<h3>{props.userData.fullName}</h3>
			<ul className="resume--bio--details">
				<li>
					<i className="fa fa-phone" aria-hidden="true" />
					{props.userData.phoneNumber}
				</li>
				<li>
					<i className="fa fa-birthday-cake" aria-hidden="true" />
					{props.userData.birthDate}
				</li>
				<li>
					<i className="fa fa-envelope" aria-hidden="true" />
					{props.userData.email}
				</li>
			</ul>
			<div className="resume--bio--social">
				<a href={props.userData.socialMedia.github.url} target="_blank" rel="noopener">
					<i className="fa fa-github" aria-hidden="true" />
				</a>
				<a href={props.userData.socialMedia.linkedin.url} target="_blank" rel="noopener">
					<i className="fa fa-linkedin" aria-hidden="true" />
				</a>
			</div>
		</div>
	</div>
);

export default Bio;
