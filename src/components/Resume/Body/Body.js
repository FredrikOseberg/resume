import React from 'react';
import ProglangCard from './ProglangCard/ProglangCard';

const Body = props => (
	<div className="resume--body">
		<h1 className="resume--body--h1">Programming Languages</h1>
		<div className="resume--body--proglang--list">
			{props.bodyData[0].map(programmingLanguage => {
				return (
					<ProglangCard
						name={programmingLanguage.name}
						key={programmingLanguage.id}
						img={programmingLanguage.img}
						skills={programmingLanguage.skills}
					/>
				);
			})}
		</div>
	</div>
);

export default Body;
