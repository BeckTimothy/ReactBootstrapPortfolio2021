import React from "react";
import {Image} from "react-bootstrap";
import {Parallax, ParallaxProvider} from 'react-scroll-parallax';
import headshot from '../../img/TestHeadshot-1000x1000bordered.png';

//create Experience JSX to serve the Experience
export const Headshot = () => {


	//TODO: figure out react-scroll-parallax update() and destroy() for resetting the parallax effect after page reload.

	return (
		<>
			<ParallaxProvider>
				<Parallax className={'thirtythree '} y={[10, -10]} x={[-50, 50]} tagOuter="FluxCapacitor">

						<Image src={headshot} />

				</Parallax>
			</ParallaxProvider>
		</>
	);
};