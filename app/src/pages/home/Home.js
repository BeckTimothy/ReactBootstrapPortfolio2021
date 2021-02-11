import React from "react";
import {Profile} from '../../shared/components/homeProfile/HomeProfile.js';
import {Projects} from '../../shared/components/homeProjects/HomeProjects.js';
//import {Col, Row, Card, Button} from "react-bootstrap";


export const Home = () => {
	return (
		<>
			<Profile />
			<Projects />
		</>
	)
};