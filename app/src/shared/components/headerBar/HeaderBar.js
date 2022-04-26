import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";


//json imported
import portfolioJson from '../../utils/portfolio.json'

//sort portfolioJson alphabetically by the name of the project
const portJson = portfolioJson.sort((x,y)=>{return x.projectName.toUpperCase().localeCompare(y.projectName.toUpperCase())});

//create HeaderBar JSX to serve the Header
export const Header = () => {

	/*
		Notes/planning:

	*/

	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Navbar.Brand href="/">Timothy Beck</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/portfolio">Portfolio</Nav.Link>
						{/*
						<Nav.Link href="/experience">Experiences</Nav.Link>
						<Nav.Link href="/about">About Me</Nav.Link>
						<NavDropdown title="Projects" id="collasible-nav-dropdown">
							<NavDropdown.Item href="/projects">All Projects</NavDropdown.Item>
							<NavDropdown.Divider />

							{portJson.map(item =>{
								let isHidden = item.projectHidden || item.projectPortfolioURL === "";
								return(!isHidden ?
									<><NavDropdown.Item href={item.projectPortfolioURL}>{item.projectName}</NavDropdown.Item></>
										: <></>)
							})}
						</NavDropdown>
						*/}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};