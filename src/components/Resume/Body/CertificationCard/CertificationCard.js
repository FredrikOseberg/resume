import React, { Component } from 'react';
import CertProjectDetails from './CertProjectDetail/CertProjectDetail';

class CertificationCard extends Component {
	constructor() {
		super();

		this.state = {
			clickedExpand: true
		};
	}

	handleClickedExpand = () => {
		this.setState({ clickedExpand: !this.state.clickedExpand }, this.addClasses);
	};

	render() {
		const certCardDisplay = this.state.clickedExpand
			? 'resume--body--certification--card--projects--wrapper display--details'
			: 'resume--body--certification--card--projects--wrapper';
		const chevronClasses = this.state.clickedExpand ? 'fa fa-chevron-down rotate--chevron' : 'fa fa-chevron-down';
		return (
			<div className="resume--body--certification--card">
				<div className="resume--body--certification--header">
					<h3>{this.props.name}</h3>
				</div>
				<div className="resume--body--certification--card--wrapper">
					<img src={this.props.img} alt={this.props.issuer} />
					<div className="resume--body--certification--card--details">
						<p className="resume--body--certification--card--details-p">Date received: {this.props.date}</p>
						<p className="resume--body--certification--card--details-p">Issuer: {this.props.issuer}</p>
					</div>
					<i className={chevronClasses} aria-hidden="true" onClick={this.handleClickedExpand} />
				</div>
				<div className={certCardDisplay}>
					<div className="resume--body--certification--card--projects">
						<h3>Mandatory Projects</h3>
						{this.props.projects.map(project => {
							return (
								<CertProjectDetails
									name={project.name}
									github={project.github}
									codepen={project.codepen}
									key={project.id}
								/>
							);
						})}
					</div>
					<a
						href={this.props.url}
						rel="noopener"
						target="_blank"
						className="resume--body--certification--card--link"
					>
						<div className="resume--body--certification--card--link--div">View Certificate</div>
					</a>
				</div>
			</div>
		);
	}
}

export default CertificationCard;
