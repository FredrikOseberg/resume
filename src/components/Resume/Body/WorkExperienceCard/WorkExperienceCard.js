import React from 'react';

const WorkExperienceCard = props => (
	<div className="resume--body--workexperience--card">
		<div className="resume--body--workexperience--header">
			<h1>{props.name}</h1>
		</div>
		<img src={props.img} alt={props.name} />
		<div className="resume--body--workexperience--details">
			<p>{props.description}</p>
			<h2>Work Tasks</h2>
			<ul className="resume--body--workexperience--worktasks--list">
				{props.tasks.map(task => {
					return <li key={task.id}>{task.name}</li>;
				})}
			</ul>
		</div>
		<div className="resume--body--workexperience--footer">
			<div className="resume--body--workexperience--footer--startdate">
				<p className="resume--body--workexperience--footer--header">Start Date</p>
				<p>{props.startDate}</p>
			</div>
			<div className="resume--body--workexperience--footer--enddate">
				<p className="resume--body--workexperience--footer--header">End Date</p>
				<p>{props.endDate}</p>
			</div>
		</div>
	</div>
);

export default WorkExperienceCard;
