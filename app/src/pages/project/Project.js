import React from "react";
import {Col, Row} from "react-bootstrap";


//json imported
import portfolioJson from '../../shared/utils/portfolio.json'
const portJson = portfolioJson;



export const Project = (props) => {
	//use path in url to find this project's data from json
	const thisProject = portJson.reduce((x,y)=>x.projectPortfolioURL===props.match.path?x:y);


	/*
		Notes/planning:
			//TODO: add array of project images to json

	*/

	return (
		<>
			<Row className={""}>
			</Row>
		</>
	)
};