import React from 'react';

//USE THIS.PROPS TO ACCESS PROPS!
//STATELESS FUNCTIONS -> ONLY RENDER, NO OTHER METHODS, NO NEED FULL REACT COMPONENT

const Header = (props) => {
		return (
			<header className="top">
				<h1>
				Catch
					<span className="ofThe">
						<span className="of">of</span>
						<span className="the">the</span>
					</span>
				Day</h1>
				<h3 className="tagline"><span>{props.tagline}</span></h3>
			</header>
		)
}


Header.propTypes = {
	tagline: React.PropTypes.string.isRequired
}

export default Header;