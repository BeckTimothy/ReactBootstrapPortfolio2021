import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

//json imported
import portfolioJson from '../../utils/portfolio.json'
const portJson = portfolioJson;


class MyCarousel extends Component {
	render() {
		return (
			<ReactCardCarousel autoplay={ true } autoplay_speed={ 7500 }>
				{portJson.map(portfolioItem => {
					return(
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
										<Button className={'demSexyShadows'} variant="secondary" href={''}>Live</Button>
										<Button className={'demSexyShadows'} variant="secondary" href={''}>Demo</Button>
									</Row>
								</Card.Body>
							</Card>
						</>
					)})}
			</ReactCardCarousel>
		);
	}
}

export default MyCarousel;