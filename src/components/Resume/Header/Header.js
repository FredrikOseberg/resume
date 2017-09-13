import React from 'react';
import Bio from './Bio/Bio';
import LanguageCard from './LanguageCard/LanguageCard';

const Header = props => (
	<div className="resume--header">
		<h1 className="resume--header--h1">Curriculum Vitae</h1>
		<div className="resume--header--wrapper">
			<div className="resume--header--languages">
				<h1>Languages</h1>
				<div className="resume--header--languages--wrapper">
					{props.headerData[1].map(language => {
						return (
							<LanguageCard
								lang={language.name}
								level={language.level}
								key={language.id}
								img={language.img}
							/>
						);
					})}
				</div>
			</div>
			<Bio userData={props.headerData[0]} />
		</div>
	</div>
);

export default Header;
