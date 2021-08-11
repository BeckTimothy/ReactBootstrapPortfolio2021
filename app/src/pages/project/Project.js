import React, {useState} from "react";

import Row from "react-bootstrap/Row";
//import {UseWindowWidth} from "../../shared/utils/UseWindowWIdth";
import {PortfolioHeader} from "../../shared/components/portfolioHeader/PortFolioHeader";
import {ReadMeAccordian} from "../../shared/components/readMeAccordian/ReadMeAccordian";
import {ProjectImages} from "../../shared/components/projectImages/ProjectImages";
import {ProjectVideos} from "../../shared/components/projectVideos/ProjectVideos";
import portfolioJson from '../../shared/utils/portfolio.json'




//set variable for project Json
const portJson = portfolioJson;





export const Project = (props) => {
	document.body.classList.add("bg-secondary");
	//use path in url to find this project's data from json
	const thisProject = portJson.reduce((x,y)=>x.projectPortfolioURL===props.match.path?x:y);
	//set variables for windows width
	//const isMedium = UseWindowWidth() >= 768;
	//const isLarge = UseWindowWidth() >= 1050;
	let isHidden = thisProject.projectHidden;

	let showImages = thisProject.projectImageNum > 0;
	let showVideos = thisProject.projectVideoNum > 0 || thisProject.projectYoutubeLinks.length > 0;


	let githubURL = thisProject.projectGithubURL;
	const [hasGithub, setHasGithub] = useState((typeof githubURL === 'string' && githubURL !== ""));
	const handleHasGithub = (val) => {
		setHasGithub(val && hasGithub)
		if(!hasGithub){thisProject.projectGithubURL = null}
	}

	fetch(githubURL.replace('https://github.com', 'https://api.github.com/repos'), {
		Accept: 'application/vnd.github.v3+json',
		method: 'GET',
	})
		.then(response => {
			if (response.ok) {
				return response.text()
			}
			throw response;
		})
		.then(data => {
			try {
				handleHasGithub(!JSON.parse(data).private)
			} catch (e) {
			}
		})
		.catch(error => console.log(error))




	/*
		Notes/planning:
			//TODO: add array of project images to json
	*/

	//console.log(readmeURL);
	return (
		<>
			<Row className={'d-flex justify-content-around'}>
				{!isHidden ? <PortfolioHeader projectObject={thisProject}/>: <></>}
				<Row className={'col-10 flex-column bg-ekshell d-flex rounded dualSexyShadows'}>
					<Row>
						<h4 className={'my-2 ml-2 pl-2'}>{thisProject.projectName} Media</h4>
					</Row>
					<Row className={'d-flex justify-content-around p-0 m-0'}>
						{showVideos ? <ProjectVideos projectObject={thisProject}/>: <></>}
						{showImages ? <ProjectImages projectObject={thisProject}/>: <></>}
					</Row>

				</Row>
				{hasGithub ? <ReadMeAccordian projectObject={thisProject}/>: <></>}
			</Row>
		</>
	)
};