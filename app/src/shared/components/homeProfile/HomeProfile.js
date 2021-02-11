import React from "react";
import {Row, Col} from "react-bootstrap";


//create Profile JSX to serve the Profile
export const Profile = () => {

	/*
		Notes/planning:
			use paralax on profile image of myself
			componentize my personal image and make it resize depending on the resoluation of the page
			decide which stats and info to share here
			write short blurb about who I am
	*/
	return (
		<>

				<Row className={'bg-dark vh-100 vw-100'}>
					<Col>
						<Row>{/*above headshot gutter*/}</Row>
						{/*Paralax Headshot image goes here*/}
						<Row>{/*below headshot gutter*/}</Row>
					</Col>
					<Col className={'bg-light'}>
						<Row className={'setHeightFourHun'}>
							{/*Personal information/stats go here*/}
						</Row>
					</Col>
				</Row>

		</>
	);
};