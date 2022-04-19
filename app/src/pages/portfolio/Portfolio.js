import React, {useState} from "react";
import Col from "react-bootstrap/Col";
import portfolioJson from '../../shared/utils/portfolio.json'
import Button from "react-bootstrap/Button";
import {PortfolioHeader} from "../../shared/components/portfolioHeader/PortFolioHeader";
import {useSelector} from "react-redux";

//set variable for project Json
const portJson = portfolioJson;

document.body.classList.add("bg-secondary");
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

	const [activeFilters, setActiveFilters] = useState([]);
	const handleActiveFilters = ( filters ) =>{
		console.log('filters arent the same');
		console.log(activeFilters);
		console.log(stateFilters);
		setActiveFilters( filters );
	}

	const stateFilters = useSelector(state => (state.filter ? state.filter : []))

	if(stateFilters !== activeFilters){handleActiveFilters(stateFilters)}
	let filteredJson = [];
	portJson.forEach(portfolioItem=> {
		let tagsIncluded = portfolioItem.projectTags.some(tag =>{
			return stateFilters.includes(tag);
		});
		if(tagsIncluded){
			filteredJson.push(portfolioItem);
		}
	})
	if(filteredJson.length === 0){filteredJson=portJson}

	//set variables for windows width
	//const isMedium = UseWindowWidth() >= 768;
	//const isLarge = UseWindowWidth() >= 1050;
	//set counter
	let isEven = true;

	return (
		<>
			<Col className={"col-sm-10 d-flex flex-column justify-content-center "}>
				{filteredJson.map(portfolioItem => {
					let isHidden = portfolioItem.projectHidden;
					if(!isHidden) {
						isEven = !isEven; //iterate t/f to make every other card display in opposite flex-directions
						let flexDir = isEven?'flex-lg-row-reverse':'flex-lg-row';
						portfolioItem = {...portfolioItem, ...{'flexDir':flexDir}};
						return (
							<>
								<PortfolioHeader projectObject={portfolioItem}/>
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