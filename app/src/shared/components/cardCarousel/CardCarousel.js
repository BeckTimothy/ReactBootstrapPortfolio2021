import React, {Component} from 'react';
import ReactCardCarousel from 'react-card-carousel';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

//json imported
import portfolioJson from '../../utils/portfolio.json'

const portJson = portfolioJson;

let filterList = new Set();
portJson.forEach(item => {
	filterList = new Set(...filterList, ...item.projectTags)
})

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
			{isProject ? <Button className={'demSexyShadows'} variant="secondary" href={''}>Project Page</Button> : <></>}
			{isLive ? <Button className={'demSexyShadows'} variant="secondary" href={''}>Live</Button> : <></>}
			{!isLive && isDemo ? <Button className={'demSexyShadows'} variant="secondary" href={''}>Demo</Button> : <></>}
			{hasGithub ? <Button className={'demSexyShadows'} variant="secondary" href={''}>Github</Button> : <></>}
		</>)//TODO: change github text to github icon
}


//TODO: don't render card when neither button is available
class MyCarousel extends Component
{
	render()
	{
		return (
			<ReactCardCarousel autoplay={true} autoplay_speed={7500}>
				{portJson.map(portfolioItem => {
					return (
						<>
							<Card style={{width: '18rem'}}>
								<Card.Img className={'rounded demSexyShadows'} style={{height: '10rem'}} variant="top"
											 src={require(`../../img/portfolioThumbnails/${portfolioItem.projectImageName}.png`)}/>
								<Card.Body>
									<Card.Title>{portfolioItem.projectName}</Card.Title>
									<Card.Text>
										{portfolioItem.projectShortDescription}
									</Card.Text>
									<Row className={'d-flex justify-content-around'}>
										{getProjectButtons(portfolioItem)}
									</Row>
								</Card.Body>
							</Card>
						</>
					)
				})}
			</ReactCardCarousel>
		);
	}
}

export default MyCarousel;