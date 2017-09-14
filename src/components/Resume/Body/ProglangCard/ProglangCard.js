import React, { Component } from 'react';
import ProglangCardDetail from './ProglangCardDetail/ProglangCardDetail';

class ProglangCard extends Component {
	constructor() {
		super();

		this.handleClickedExpand = this.handleClickedExpand.bind(this);

		this.state = {
			clickedExpand: false
		};
	}

	handleClickedExpand() {
		this.setState({ clickedExpand: !this.state.clickedExpand });
	}
	render() {
		const wrapperClasses = this.state.clickedExpand
			? 'resume--body--proglang--details--wrapper display--details'
			: 'resume--body--proglang--details--wrapper';
		const chevronClasses = this.state.clickedExpand ? 'fa fa-chevron-down rotate--chevron' : 'fa fa-chevron-down';
		return (
			<div className="resume--body--proglang--card">
				<div className="resume--body--proglang--card--wrapper">
					<div className="resume--body--proglang--card--image">
						<img src={this.props.img} alt={this.props.name} />
					</div>
					<div className="resume--body--proglang--card--name">
						<p>{this.props.name}</p>
					</div>
					<i className={chevronClasses} aria-hidden="true" onClick={this.handleClickedExpand} />
				</div>
				<div className={wrapperClasses}>
					<div className="resume--body--proglang--card--details">
						{this.props.skills.map(skill => {
							return (
								<ProglangCardDetail
									name={skill.name}
									rating={skill.rating}
									description={skill.description}
									key={skill.id}
									display={this.state.clickedExpand}
								/>
							);
						})}
					</div>
					<div className="resume--body--proglang--card--summary">
						<h1>Summary</h1>
						<div className="resume--body--proglang--summary--details">
							<p>{this.props.description}</p>
							<i className="fa fa-check" aria-hidden="true" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProglangCard;
