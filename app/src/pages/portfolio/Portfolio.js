import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Img from "react-bootstrap/Image";
import {UseWindowWidth} from "../../shared/utils/UseWindowWIdth";

//json imported
import portfolioJson from '../../shared/utils/portfolio.json'
import Card from "react-bootstrap/Card";

//set variable for project Json
const portJson = portfolioJson;


export const Portfolio = (props) => {

	//set variables for windows width
	const isMedium = UseWindowWidth() >= 768;
	const isLarge = UseWindowWidth() >= 1050;
	//set counter
	let isEven = true;

	return (
		<>
			<Col className={""}>
				{portJson.map(portfolioItem => {
					let isHidden = portfolioItem.projectHidden;
					if(!isHidden) {
						isEven = !isEven; //iterate t/f to make every other card display in opposite flex-directions
						let flexDir = isEven?'flex-row-reverse':'flex-row';


						return (
							<>
								<div className={flexDir + ' d-flex'}>
									<Col>
										<h1>{portfolioItem.projectName}</h1>
										<span>{portfolioItem.projectShortDescription}</span>
									</Col>
									<Col>
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