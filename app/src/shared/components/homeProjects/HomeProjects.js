import React from "react";
import {Row, Col, Card, Button} from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'


import portfolioThumbnail from '../../img/portfolioThumbnails/portfolio-preview.png';
import capstoneThumbnail from '../../img/portfolioThumbnails/capstone-preview.png';
import nmsavinThumbnail from '../../img/portfolioThumbnails/nmsavin-preview.png';

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
					<Row className={'transformProjectsFix vw-100 d-flex justify-content-around'}>
						<Col className={'d-flex flex-column justify-content-start align-items-center'}>
							<span className={'text-white h2 font-italic'}>Portfolio</span>
						</Col>
						<Col className={'d-flex flex-column align-items-center justify-content-end m-5 p-5'}>
							<Row className={'h-25'}></Row>
							<Row className={'col-lg-6'}>
								<Carousel interval={'15000'} className={''}>

									<Carousel.Item className={'justify-content-center demSexyShadows'}>
										<Card style={{width: '18rem' }}>
											<Card.Img className={'rounded demSexyShadows'} style={{height: '10rem'}} variant="top" src={capstoneThumbnail} />
											<Card.Body>
												<Card.Title>ABQ Veterans</Card.Title>
												<Card.Text>
													Lorem Ipsum
												</Card.Text>
												<Row className={'d-flex justify-content-around'}>
													<Button className={'demSexyShadows'} variant="secondary" href={''}>Live</Button>
													<Button className={'demSexyShadows'} variant="secondary" href={''}>Demo</Button>
												</Row>
											</Card.Body>
										</Card>

									</Carousel.Item>

									<Carousel.Item className={'justify-content-center demSexyShadows'}>
										<Card style={{ width: '18rem' }}>
											<Card.Img className={'rounded demSexyShadows'} style={{height: '10rem'}} variant="top" src={portfolioThumbnail} />
											<Card.Body>
												<Card.Title>2019 Portfolio</Card.Title>
												<Card.Text>
													Lorem Ipsum
												</Card.Text>
												<Row className={'d-flex justify-content-around'}>
													<Button className={'demSexyShadows'} variant="secondary" href={''}>Live</Button>
													<Button className={'demSexyShadows'} variant="secondary" href={''}>Demo</Button>
												</Row>
											</Card.Body>
										</Card>
									</Carousel.Item>

									<Carousel.Item className={'justify-content-center demSexyShadows'}>
										<Card style={{ width: '18rem' }}>
											<Card.Img className={'rounded demSexyShadows'} style={{height: '10rem'}} variant="top" src={nmsavinThumbnail} />
											<Card.Body>
												<Card.Title>NMSAVIN</Card.Title>
												<Card.Text>
													Lorem Ipsum
												</Card.Text>
												<Row className={'d-flex justify-content-around'}>
													<Button className={'demSexyShadows'} variant="secondary" href={''}>Live</Button>
													<Button className={'demSexyShadows'} variant="secondary" href={''}>Demo</Button>
												</Row>
											</Card.Body>
										</Card>
									</Carousel.Item>

								</Carousel>
							</Row>



							<Row className={'h-25'}></Row>
						</Col>
					</Row>
				</Row>
			</Row>
		</>
	);
};