import React, { Component } from 'react';
import ProglangCard from './ProglangCard/ProglangCard';
import EducationCard from './EducationCard/EducationCard';
import CertificationCard from './CertificationCard/CertificationCard';
import WorkExperienceCard from './WorkExperienceCard/WorkExperienceCard';

class Body extends Component {
	constructor() {
		super();

		this.handleClickedButton = this.handleClickedButton.bind(this);

		this.state = {
			selectedButton: 'highlight'
		};
	}
	handleClickedButton(event) {
		this.setState({ selectedButton: event.target.dataset.target });
	}
	render() {
		let highlight, all, coding, management;
		this.state.selectedButton === 'highlight'
			? (highlight =
					'resume--body--workexperience--filter--button workexperience--filter--highlighted filter--button--active')
			: (highlight = 'resume--body--workexperience--filter--button workexperience--filter--highlighted');
		this.state.selectedButton === 'all'
			? (all = 'resume--body--workexperience--filter--button workexperience--filter--all filter--button--active')
			: (all = 'resume--body--workexperience--filter--button workexperience--filter--all');
		this.state.selectedButton === 'coding'
			? (coding =
					'resume--body--workexperience--filter--button workexperience--filter--coding filter--button--active')
			: (coding = 'resume--body--workexperience--filter--button workexperience--filter--coding');
		this.state.selectedButton === 'management'
			? (management =
					'resume--body--workexperience--filter--button workexperience--filter--management filter--button--active')
			: (management = 'resume--body--workexperience--filter--button workexperience--filter--management');
		return (
			<div className="resume--body">
				<div className="resume--body--programming--languages">
					<h1 className="resume--body--h1">Programming Languages</h1>
					<div className="resume--body--proglang--list">
						{this.props.bodyData[0].map(programmingLanguage => {
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
						{this.props.bodyData[1].map(education => {
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
				<div className="resume--body--certification">
					<h1 className="resume--body--certification--h1">Certifications</h1>
					<div className="resume--body--certification--list" />
					{this.props.bodyData[2].map(certificate => {
						return (
							<CertificationCard
								name={certificate.name}
								img={certificate.img}
								issuer={certificate.issuer}
								date={certificate.date}
								key={certificate.id}
								projects={certificate.projects}
								url={certificate.link}
							/>
						);
					})}
				</div>
				<div className="resume--body--workexperience">
					<h1 className="resume--body--workexperience--h1">Work Experience</h1>
					<div className="resume--body--workexperience--filter--wrapper">
						<div className={highlight} onClick={this.handleClickedButton} data-target="highlight">
							Highlighted
						</div>
						<div className={all} onClick={this.handleClickedButton} data-target="all">
							All
						</div>
						<div className={coding} onClick={this.handleClickedButton} data-target="coding">
							Coding
						</div>
						<div className={management} onClick={this.handleClickedButton} data-target="management">
							Management
						</div>
					</div>
					<div className="resume--body--workexperience--list">
						{this.props.bodyData[3]
							.filter(workExperience => workExperience[this.state.selectedButton])
							.map(workExperience => {
								return (
									<WorkExperienceCard
										img={workExperience.img}
										name={workExperience.title}
										tasks={workExperience.workTasks}
										startDate={workExperience.startDate}
										endDate={workExperience.endDate}
										description={workExperience.description}
										key={workExperience.id}
									/>
								);
							})}
					</div>
				</div>
			</div>
		);
	}
}

export default Body;
