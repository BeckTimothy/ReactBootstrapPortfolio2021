import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from '../cardCarousel/CardCarousel';

//json imported
import portfolioJson from '../../utils/portfolio.json'
import Button from "react-bootstrap/Button";

const portJson = portfolioJson;

//build list of filters for portfolio objects
let filterList = new Set();
portJson.forEach(item => {
	item.projectTags.forEach(x => filterList.add(x))
})




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
						<Col className={'d-flex flex-column align-items-center justify-content-center my-0'}>
							<span className={'text-white h1 font-italic mb-5'}>Portfolio</span>
							<a className={'text-white-50'} href={'https://www.google.com'}>View Full Portfolio</a>
							<Row className={'align-items-baseline flex-wrap w-40'}>
								<span className={'text-white mt-4 text-left'}>Filter by: </span>
								{Array.from(filterList).map((item) => {
									return (
										<>
											<Button className={'px-1 py-0 m-1'} variant="outline-success" href={''}>{item}</Button>
										</>
									)
								})}
							</Row>
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