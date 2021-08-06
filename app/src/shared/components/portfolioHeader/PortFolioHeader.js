import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Img from "react-bootstrap/Image";

//json imported
import portfolioJson from '../../utils/portfolio.json'
import Button from "react-bootstrap/Button";

//set variable for project Json
const portJson = portfolioJson;


const getProjectButtons = (projectObject) => {
	let projectURL = projectObject.projectPortfolioURL;
	let demoURL = projectObject.projectDemoSiteURL;
	let liveURL = projectObject.projectLiveSiteURL;
	let githubURL = projectObject.projectGithubURL;
	let isProject, isLive, isDemo, hasGithub = false;
	if(typeof projectURL === 'string' && projectURL !== "") {
		isProject = true;
	}
	if(typeof demoURL === 'string' && demoURL !== "") {
		isDemo = true;
	}
	if(typeof liveURL === 'string' && liveURL !== "") {
		isLive = true;
	}
	if(typeof githubURL === 'string' && githubURL !== "") {
		hasGithub = true;
	}

	return (
		<>
			{isProject ? <Button className={'demSexyShadows'} variant="secondary" href={projectObject.projectPortfolioURL}>Project
				Page</Button> : <></>}
			{isLive ? <Button className={'demSexyShadows'} variant="secondary" href={projectObject.projectLiveSiteURL}>Live
				Website</Button> : <></>}
			{!isLive && isDemo ?
				<Button className={'demSexyShadows'} variant="secondary" href={projectObject.projectDemoSiteURL}>Demo
					Website</Button> : <></>}
			{hasGithub ? <Button className={'demSexyShadows'} variant="secondary" href={projectObject.projectGithubURL}>Github
				Repo</Button> : <></>}
		</>)
}

export const PortfolioHeader = (item) => {
	item = item.projectObject

		return (

				<div
					className={'col-10 d-flex justify-content-around bg-ekshell rounded my-2 p-3 dualSexyShadows'}>{/*TODO: change color*/}
					<Col className={'d-flex flex-column justify-content-between'}>
						<h1>{item.projectName}</h1>
						<span>{item.projectShortDescription}</span>
						<Row className={'px-3 mt-2'}>{getProjectButtons(item)}</Row>
					</Col>
					<Col className={'d-flex justify-content-around'}>
						<Img className={'rounded demSexyShadows w-50'}
							  src={require(`../../img/portfolioThumbnails/${item.projectImageName}.png`)}/>
					</Col>
				</div>

		)
};