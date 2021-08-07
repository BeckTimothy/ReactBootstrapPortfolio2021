import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Img from "react-bootstrap/Image";
import {UseWindowWidth} from "../../shared/utils/UseWindowWIdth";

//json imported
import portfolioJson from '../../shared/utils/portfolio.json'
import Card from "react-bootstrap/Card";
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
			{isProject ? <Button className={'demSexyShadows mx-2'} variant="secondary" href={projectObject.projectPortfolioURL}>Project Page</Button> : <></>}
			{isLive ? <Button className={'demSexyShadows mx-2'} variant="secondary" href={projectObject.projectLiveSiteURL}>Live Website</Button> : <></>}
			{!isLive && isDemo ? <Button className={'demSexyShadows mx-2'} variant="secondary" href={projectObject.projectDemoSiteURL}>Demo Website</Button> : <></>}
			{hasGithub ? <Button className={'demSexyShadows mx-2'} variant="secondary" href={projectObject.projectGithubURL}>Github Repo</Button> : <></>}
		</>)
}

export const Portfolio = (props) => {

	//set variables for windows width
	const isMedium = UseWindowWidth() >= 768;
	const isLarge = UseWindowWidth() >= 1050;
	//set counter
	let isEven = true;

	return (
		<>
			<Col className={"col-sm-10 d-flex flex-column justify-content-center "}>
				{portJson.map(portfolioItem => {
					let isHidden = portfolioItem.projectHidden;
					if(!isHidden) {
						isEven = !isEven; //iterate t/f to make every other card display in opposite flex-directions
						let flexDir = isEven?'flex-row-reverse':'flex-row';


						return (
							<>
								<div className={flexDir + ' d-flex justify-content-around bg-ekshell rounded my-2 p-3 demSexyShadows insetShadows'}>{/*TODO: change color*/}
									<Col className={'d-flex flex-column justify-content-between'}>
										<h1>{portfolioItem.projectName}</h1>
										<span>{portfolioItem.projectShortDescription}</span>
										<Row className={'d-flex px-3 mt-2'}>{getProjectButtons(portfolioItem)}</Row>
									</Col>
									<Col className={'d-flex justify-content-around'}>
										<Img className={'rounded demSexyShadows w-50'}
											  src={require(`../../shared/img/portfolioThumbnails/${portfolioItem.projectImageName}.png`)}/>
									</Col>
								</div>
							</>
						)


					} else {
						return (<></>)
					}

				})}
			</Col>
		</>
	)
};