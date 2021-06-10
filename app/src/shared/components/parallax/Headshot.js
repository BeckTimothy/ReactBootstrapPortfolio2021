import React from "react";
import {Image} from "react-bootstrap";
import {Parallax, ParallaxProvider} from 'react-scroll-parallax';
import headshot from '../../img/TestHeadshot-1000x1000bordered.png';
import { ClientInnerWidth, ScaleImg } from "react-scale-image";
import {UseWindowWidth} from "../../utils/UseWindowWIdth";
//create Experience JSX to serve the Experience
export const Headshot = () => {


	return (
		<>
			<ParallaxProvider>
				<Parallax className={'thirtythree'} y={[10, -10]} x={[-50, 50]} tagOuter="FluxCapacitor">
					<Image src={headshot} />
				</Parallax>
			</ParallaxProvider>
		</>
	);
};