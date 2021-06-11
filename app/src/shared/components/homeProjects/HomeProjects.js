import React from "react";
import {Row, Col, Card, Button} from "react-bootstrap";
import Carousel from '../cardCarousel/CardCarousel';




//create Projects JSX to serve the Projects
export const Projects = () => {

	/*
		Notes/planning:
			use rotate(n deg) to angle background in a modern way to make page not look like every other bootstrap page
			pick a few projects to show off
			design how we'll display projects
	*/




	return (
		<>
			<Row className={'transformProjects bg-dark vw-100 h-75 bannerShadow'}>
				<Row className={'projectsBorder bg-lighterDark mx-0 px-0 my-5 vw-100'}>
					<Row className={'transformProjectsFix vw-100 d-flex justify-content-around flex-column flex-lg-row'}>
						<Col className={'d-flex flex-column align-items-center my-0'}>
							<span className={'text-white h2 font-italic my-0'}>Portfolio</span>
						</Col>
						<Col className={'d-flex flex-column align-items-center justify-content-end m-5 p-5'}>

							<Row className={'col-lg-6'}>
								<Carousel/>
							</Row>

						</Col>
					</Row>
				</Row>

			</Row>

		</>
	);
};