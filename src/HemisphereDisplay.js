import React from 'react';
import './hemisphere.css';
import northernPic from './image/Northern Hemi.gif';
import southernPic from './image/Southern Hemi.jpeg';

const hemisphereConfig = {
	Northern: {
		text: 'You are in the Northern hemisphere!',
		picture: northernPic
	},
	Southern: {
		text: 'You are in the Southern hemisphere!',
		picture: southernPic
	}
};

const HemisphereDisplay = ({ latitude }) => {
	const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
	const { text, picture } = hemisphereConfig[hemisphere];

	return (
		<div className={hemisphere}>
			<div className="ui raised text container segment">
				<div className="image">
					<img src={picture} alt="hemisphere picture" />
				</div>
				<div className="ui black bottom attached label">
					<h1>{text}</h1>
				</div>
			</div>
		</div>
	);
};

export default HemisphereDisplay;
