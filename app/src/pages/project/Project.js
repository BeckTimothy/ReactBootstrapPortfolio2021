import React, {useEffect, useState} from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {UseWindowWidth} from "../../shared/utils/UseWindowWIdth";
import {PortfolioHeader} from "../../shared/components/portfolioHeader/PortFolioHeader";
import {ReadMeAccordian} from "../../shared/components/readMeAccordian/ReadMeAccordian";
import {ProjectImages} from "../../shared/components/projectImages/ProjectImages";
//json imported
import portfolioJson from '../../shared/utils/portfolio.json'
import Card from "react-bootstrap/Card";



//set variable for project Json
const portJson = portfolioJson;





export const Project = (props) => {
	document.body.classList.add("bg-secondary");
	//use path in url to find this project's data from json
	const thisProject = portJson.reduce((x,y)=>x.projectPortfolioURL===props.match.path?x:y);
//set variables for windows width
	const isMedium = UseWindowWidth() >= 768;
	const isLarge = UseWindowWidth() >= 1050;
	let isHidden = thisProject.projectHidden;


	let githubURL = thisProject.projectGithubURL;
	let hasGithub = (typeof githubURL === 'string' && githubURL !== "");




	/*
		Notes/planning:
			//TODO: add array of project images to json
	*/

	//console.log(readmeURL);
	return (
		<>
			<Row className={'d-flex justify-content-around'}>
				{!isHidden ? <PortfolioHeader projectObject={thisProject}/>: <></>}
				<Row className={'col-12'}>
					<ProjectImages projectObject={thisProject}/>
				</Row>
				{hasGithub ? <ReadMeAccordian githubURL={thisProject.projectGithubURL}/>: <></>}
			</Row>
		</>
	)
};