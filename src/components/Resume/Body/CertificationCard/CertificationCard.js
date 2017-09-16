import React, { Component } from 'react';
import CertProjectDetails from './CertProjectDetail/CertProjectDetail';

class CertificationCard extends Component {
	constructor() {
		super();

		this.handleClickedExpand = this.handleClickedExpand.bind(this);
		this.addClasses = this.addClasses.bind(this);

		this.state = {
			clickedExpand: false,
			classes: 'resume--body--certification--card--projects--wrapper',
			chevronClasses: 'fa fa-chevron-down'
		};
	}

	handleClickedExpand() {
		this.setState({ clickedExpand: !this.state.clickedExpand }, this.addClasses);
	}
	addClasses() {
		if (this.state.clickedExpand) {
			this.setState({ classes: 'resume--body--certification--card--projects--wrapper display--details' });
			this.setState({ chevronClasses: 'fa fa-chevron-down rotate--chevron' });
		} else {
			this.setState({ classes: 'resume--body--certification--card--projects--wrapper' });
			this.setState({ chevronClasses: 'fa fa-chevron-down' });
		}
	}
	render() {
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
					<i className={this.state.chevronClasses} aria-hidden="true" onClick={this.handleClickedExpand} />
				</div>
				<div className={this.state.classes}>
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
