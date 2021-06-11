import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

//json imported
import portfolioJson from '../../utils/portfolio.json'

//images imported
import portfolioThumbnail from '../../img/portfolioThumbnails/portfolio-preview.png';
import capstoneThumbnail from '../../img/portfolioThumbnails/capstone-preview.png';
import nmsavinThumbnail from '../../img/portfolioThumbnails/nmsavin-preview.png';


class MyCarousel extends Component {


	render() {
		return (
			<ReactCardCarousel autoplay={ true } autoplay_speed={ 5000 }>

						<Card style={{width: '18rem'}}>
							<Card.Img className={'rounded demSexyShadows'} style={{height: '10rem'}} variant="top"
										 src={'http://localhost:3000/static/media/capstone-preview.9f037da5.png'}/>
							<Card.Body>
								<Card.Title>ABQ Veterans</Card.Title>
								<Card.Text>
									Lorem Ipsum
								</Card.Text>
								<Row className={'d-flex justify-content-around'}>
									<Button className={'demSexyShadows'} variant="secondary" href={''}>Live</Button>
									<Button className={'demSexyShadows'} variant="secondary" href={''}>Demo</Button>
								</Row>
							</Card.Body>
						</Card>

					<Card style={{width: '18rem'}}>
						<Card.Img className={'rounded demSexyShadows'} style={{height: '10rem'}} variant="top"
									 src={'http://localhost:3000/static/media/portfolio-preview.e31e2085.png'}/>
						<Card.Body>
							<Card.Title>2019 Portfolio</Card.Title>
							<Card.Text>
								Lorem Ipsum
							</Card.Text>
							<Row className={'d-flex justify-content-around'}>
								<Button className={'demSexyShadows'} variant="secondary" href={''}>Live</Button>
								<Button className={'demSexyShadows'} variant="secondary" href={''}>Demo</Button>
							</Row>
						</Card.Body>
					</Card>

					<Card style={{width: '18rem'}}>
						<Card.Img className={'rounded demSexyShadows'} style={{height: '10rem'}} variant="top"
									 src={'http://localhost:3000/static/media/nmsavin-preview.2e3344a5.png'}/>
						<Card.Body>
							<Card.Title>NMSAVIN</Card.Title>
							<Card.Text>
								Lorem Ipsum
							</Card.Text>
							<Row className={'d-flex justify-content-around'}>
								<Button className={'demSexyShadows'} variant="secondary" href={''}>Live</Button>
								<Button className={'demSexyShadows'} variant="secondary" href={''}>Demo</Button>
							</Row>
						</Card.Body>
					</Card>
			</ReactCardCarousel>
		);
	}
}

export default MyCarousel;