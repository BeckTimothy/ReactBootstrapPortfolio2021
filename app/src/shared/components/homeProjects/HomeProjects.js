import React, {useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from '../cardCarousel/CardCarousel';

//json imported
import portfolioJson from '../../utils/portfolio.json'
import Button from "react-bootstrap/Button";

const portJson = portfolioJson;

//build list of filters for portfolio objects
let filterList = new Set();
portJson.forEach(item => {
	item.projectTags.forEach(x => filterList.add(x))
})




//create Projects JSX to serve the Projects
export const Projects = () => {

	/*
		Notes/planning:
			use rotate(n deg) to angle background in a modern way to make page not look like every other bootstrap page
			pick a few projects to show off
			design how we'll display projects
	*/



	const [activeFilters, setActiveFilters] = useState([]);
	const [,updateState] = useState();
	const forceUpdate = React.useCallback(() => updateState({}), []);

	const handleFilters = (filter) => {
		let newFilterList = activeFilters;
		newFilterList.includes(filter) ? newFilterList.splice(newFilterList.indexOf(filter),1) : newFilterList.push(filter);
		//console.log(newFilterList);
		setActiveFilters(newFilterList);
		forceUpdate();
	}

	const filterJson = () =>{
		let filteredJson = [];
		portJson.forEach(portfolioItem=> {
			let tagsIncluded = portfolioItem.projectTags.some(tag =>{
				return activeFilters.includes(tag);
			});
			if(tagsIncluded){
				filteredJson.push(portfolioItem);
			}
		})
		if(filteredJson.length === 0){filteredJson=portJson}
		return filteredJson;
	}
	let portfolioList = filterJson();

	console.log(portfolioList);
	const buttonStyle =(tag)=>{
		return activeFilters.includes(tag)?"badgeActive":"badgeSuccess"
	}

	return (
		<>
			<Row className={'transformProjects bg-dark vw-100 h-75 bannerShadow'}>
				<Row className={'projectsBorder bg-lighterDark mx-0 px-0 my-5 vw-100'}>
					<Row className={'transformProjectsFix vw-100 d-flex justify-content-around flex-column flex-lg-row'}>
						<Col className={'d-flex flex-column align-items-center justify-content-start pt-10vh my-0'}>
							<span className={'ekshell bigText h1 font-italic mb-5'}>Portfolio</span>
							<a className={'ekshell-50'} href={'https://www.google.com'}>View Full Portfolio</a>

							{/*
							<Row className={'align-items-baseline flex-wrap w-40'}>
								<span className={'text-white mt-4 text-left'}>Filter by: </span>
								{Array.from(filterList).map((item) => {
									return (
										<>
											<Button className={'px-1 py-0 m-1 '+ buttonStyle(item)} key={`projectsButton` + item} variant="outline-success" onClick={()=>handleFilters(item)}>{item}</Button>
										</>
									)
								})}
							</Row>
							*/}

						</Col>
						<Col className={'d-flex flex-column align-items-center justify-content-end m-5 p-5'}>

							<Row className={'col-lg-6'}>
								<Carousel portfolioList={portfolioList}/>
							</Row>

						</Col>
					</Row>
				</Row>

			</Row>

		</>
	);
};