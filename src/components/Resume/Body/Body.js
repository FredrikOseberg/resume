import React from 'react';
import ProglangCard from './ProglangCard/ProglangCard';
import EducationCard from './EducationCard/EducationCard';

const Body = props => (
	<div className="resume--body">
		<div className="resume--body--programming--languages">
			<h1 className="resume--body--h1">Programming Languages</h1>
			<div className="resume--body--proglang--list">
				{props.bodyData[0].map(programmingLanguage => {
					return (
						<ProglangCard
							name={programmingLanguage.name}
							key={programmingLanguage.id}
							img={programmingLanguage.img}
							skills={programmingLanguage.skills}
							description={programmingLanguage.description}
						/>
					);
				})}
			</div>
		</div>
		<div className="resume--body--education">
			<h1 className="resume--body--education--h1">Education</h1>
			<div className="resume--body--education--list">
				{props.bodyData[1].map(education => {
					return (
						<EducationCard
							name={education.name}
							institution={education.institution}
							startYear={education.startYear}
							endYear={education.endYear}
							key={education.id}
							img={education.img}
						/>
					);
				})}
			</div>
		</div>
	</div>
);

export default Body;
