import React, { Component } from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import data from '../../data.js';

class Resume extends Component {
	headerData = [data.user, data.lang];
	bodyData = [data.programmingLanguages, data.education];
	render() {
		return (
			<div id="resume">
				<Header headerData={this.headerData} />
				<Body bodyData={this.bodyData} />
			</div>
		);
	}
}

export default Resume;
