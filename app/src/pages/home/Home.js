import React from "react";
import {Profile} from '../../shared/components/homeProfile/HomeProfile.js';
import {Projects} from '../../shared/components/homeProjects/HomeProjects.js';
import {Col, Row, Card, Button} from "react-bootstrap";


export const Home = () => {
	return (
		<>



			<Profile />
			<Projects />

				<Row className={'vw-100 h-75'}>
					<Col className={'d-flex flex-column justify-content-end'}>
						<h2 className={'ekshell'}>
							Thank you,
						</h2>
						<span className={'ekshell-50'}>
						All rights reserved. © 2022 Timothy Beck
						</span>
					</Col>
				</Row>


		</>
	)
};