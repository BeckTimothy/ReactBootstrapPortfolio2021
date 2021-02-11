import React from "react";
import {Row, Col, Card, Button} from "react-bootstrap";

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
			<Row className={'transformProjects bg-danger vw-100 h-75 justify-content-around'}>
				<Row className={'transformProjectsFix vw-100 d-flex justify-content-around'}>
					<Col className={'d-flex flex-column justify-content-start align-items-center'}>
						<span className={'text-white h2 font-italic'}>Portfolio</span>
					</Col>
					<Col className={'d-flex flex-column justify-content-end m-5 p-5'}>
						<Row className={'h-25'}></Row>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant="top" src="holder.js/100px180" />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up the bulk of
									the card's content.
								</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
						<Row className={'h-25'}></Row>

					</Col>
				</Row>
			</Row>
		</>
	);
};