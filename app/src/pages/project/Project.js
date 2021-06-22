import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {UseWindowWidth} from "../../shared/utils/UseWindowWIdth";

//json imported
import portfolioJson from '../../shared/utils/portfolio.json'
import Card from "react-bootstrap/Card";

//set variable for project Json
const portJson = portfolioJson;




export const Project = (props) => {
	//use path in url to find this project's data from json
	const thisProject = portJson.reduce((x,y)=>x.projectPortfolioURL===props.match.path?x:y);
//set variables for windows width
	const isMedium = UseWindowWidth() >= 768;
	const isLarge = UseWindowWidth() >= 1050;
	let isHidden = thisProject.projectHidden;
	/*
		Notes/planning:
			//TODO: add array of project images to json

	*/

	return (
		<>
			<Col className={""}>
				{




					!isHidden ?
							<>
								<Card style={{width: '18rem'}}>
									<Card.Img className={'rounded demSexyShadows'} style={{height: '10rem'}} variant="top"
												 src={require(`../../shared/img/portfolioThumbnails/${thisProject.projectImageName}.png`)}/>
									<Card.Body>
										<Card.Title>{thisProject.projectName}</Card.Title>
										<Card.Text>
											{thisProject.projectShortDescription}
										</Card.Text>
										<Row className={'d-flex justify-content-around'}>
											{}
										</Row>
									</Card.Body>
								</Card>
							</> : <></>

				}
			</Col>
		</>
	)
};