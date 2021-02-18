import React from "react";
import {Image, Row, Col} from "react-bootstrap";
import {Headshot} from '../parallax/Headshot.js'

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
			<Row className={'bg-ekshell vh-100 vw-100 d-flex justify-content-around'}>
				<Col className={'d-none col-0 d-lg-flex col-lg-6 justify-content-start'}>
					<Row><Headshot/></Row>
					<Row>{/*below headshot gutter*/}</Row>
				</Col>
				<Col className={'col-md-10 col-lg-4 p-0 rounded-0 d-flex flex-column justify-content-center'}>
					<Row className={'profileDrawer m-0 p-3 rounded-top'}></Row>
					{/* NAME */}
					<Row className={'profileDrawer d-flex justify-content-center m-0'}>
						<Col className={'col-3 text-right h6'}>
							Name:
						</Col>
						<Col className={'col-6 text-left h6'}>
							Timothy Beck
						</Col>
						<Col className={'col-3'}>
						</Col>
					</Row>
					{/* LOCATION */}
					<Row className={'profileDrawer d-flex justify-content-center m-0'}>
						<Col className={'col-3 text-right h6'}>
							Location:
						</Col>
						<Col className={'col-6 text-left h6'}>
							Albuquerque, New Mexico
						</Col>
						<Col className={'col-3'}>
						</Col>
					</Row>
					{/* PHONE */}
					<Row className={'profileDrawer d-flex justify-content-center m-0'}>
						<Col className={'col-3 text-right h6'}>
							Phone:
						</Col>
						<Col className={'col-6 text-left h6'}>
							(775)671-8596
						</Col>
						<Col className={'col-3'}>
						</Col>
					</Row>
					{/* EMAIL */}
					<Row className={'profileDrawer d-flex justify-content-center m-0'}>
						<Col className={'col-3 text-right h6'}>
							Email:
						</Col>
						<Col className={'col-6 text-left h6'}>
							dev@timothybeck.com
						</Col>
						<Col className={'col-3'}>
						</Col>
					</Row>
					{/* GITHUB */}
					<Row className={'profileDrawer d-flex justify-content-center m-0'}>
						<Col className={'col-3 text-right h6'}>
							Github:
						</Col>
						<Col className={'col-6 text-left h6'}>
							Github.com/BeckTimothy/
						</Col>
						<Col className={'col-3'}>
						</Col>
					</Row>
					{/* LINKEDIN */}
					<Row className={'profileDrawer d-flex justify-content-center m-0'}>
						<Col className={'col-3 text-right h6'}>
							LinkedIn:
						</Col>
						<Col className={'col-6 text-left h6'}>
							Linkedin.com/in/timothymbeck/
						</Col>
						<Col className={'col-3'}>
						</Col>
					</Row>
					{/* OBJECTIVE */}
					<Row className={'profileDrawer d-flex justify-content-center m-0'}>
						<Col className={'col-3 text-right h6'}>
							Objective:
						</Col>
						<Col className={'col-7 text-left h6'}>
							To learn as much as possible and grow as fast as possible in the realm of Web Development.
						</Col>
						<Col className={'col-2'}>
						</Col>
					</Row>
					{/* HOBBIES */}
					<Row className={'profileDrawer d-flex justify-content-center m-0'}>
						<Col className={'col-3 text-right h6'}>
							Hobbies:
						</Col>
						<Col className={'col-7 text-left h6'}>
							Video Games, Mechanical Keyboards, Web Applications, Computer Hardware, Competitive Napping,
							Dungeons & Dragons, and other nerd stuff.
						</Col>
						<Col className={'col-2'}>
						</Col>
					</Row>
					<Row className={'profileDrawer m-0 p-3 rounded-bottom'}></Row>
					<Row className={'col-1'}></Row>
					<Row className={'col-1'}></Row>
					<Row className={'col-1'}></Row>
				</Col>
			</Row>
		</>
	);
};