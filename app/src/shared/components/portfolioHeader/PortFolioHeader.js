import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Img from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import {ReadMeAccordian} from "../readMeAccordian/ReadMeAccordian";

export const PortfolioHeader = (item) => {
	item = item.projectObject

	const getProjectButtons = () => {
		let projectURL = item.projectPortfolioURL;
		let demoURL = item.projectDemoSiteURL;
		let liveURL = item.projectLiveSiteURL;
		let githubURL = item.projectGithubURL;
		let isProject, isLive, isDemo, hasGithub = false;
		//if (typeof projectURL === 'string' && projectURL !== "") {
		//    isProject = true;
		//}
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
				{isProject ?
					<Button className={'demSexyShadows mx-2'} variant="secondary" href={item.projectPortfolioURL}>Project
						Page</Button> : <></>}
				{isLive ? <Button className={'demSexyShadows mx-2'} variant="secondary" href={item.projectLiveSiteURL}>Live
					Website</Button> : <></>}
				{!isLive && isDemo ?
					<Button className={'demSexyShadows mx-2'} variant="secondary" href={item.projectDemoSiteURL}>Demo
						Website</Button> : <></>}
				{hasGithub ? <Button className={'demSexyShadows mx-2'} variant="secondary" href={item.projectGithubURL}>Github
					Repo</Button> : <></>}
			</>)
	}

	return (

		<div
			className={'d-flex justify-content-around bg-ekshell rounded my-2 p-3 dualSexyShadows flex-wrap'}>{/*TODO: change color*/}

			<Row className={item.flexDir}>
				<Col className={'d-flex flex-column justify-content-around'}>
					<div>
						<Row className={'ml-1 d-flex align-items-center justify-content-between'}>
							<h1 className={''}>{item.projectName}</h1>
						</Row>
						<Row className={'ml-1 d-flex justify-content-left align-items-center'}>
							<span>Tech Stack: </span>
							{item.projectTags.map((item) => {
								return (
									<>
										<Badge className={'px-1 py-0 mx-1 my-1 badgeSuccess'}>{item}</Badge>
									</>
								)
							})}
						</Row>
					</div>
					<span className={'ml-1'}>{item.projectShortDescription}</span>
					<Row className={'px-3 mt-2'}>{getProjectButtons(item)}</Row>
				</Col>
				<Col className={'d-flex justify-content-around align-items-centerX'}>

                <div className={'w-50'}>
                    <Img className={'img-fluid demSexyShadows '}
                         src={require(`../../img/portfolioThumbnails/${item.projectImageName}.png`)}/>
                </div>

				</Col>

			</Row>

			<Row className={'flex-lg-row w-100'}>
				<ReadMeAccordian projectObject={item}/>
			</Row>
		</div>


	)
};