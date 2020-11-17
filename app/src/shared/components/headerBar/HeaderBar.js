import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";

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
						<Nav.Link href="/experience">Experiences</Nav.Link>
						<Nav.Link href="/about">About Me</Nav.Link>
						<NavDropdown title="Projects" id="collasible-nav-dropdown">
							<NavDropdown.Item href="/projects">All Projects</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="/nmsavin">NMSAVIN</NavDropdown.Item>
							<NavDropdown.Item href="/abqveterans">ABQ Veterans</NavDropdown.Item>
							<NavDropdown.Item href="/portfolio2021">Portfolio 2021</NavDropdown.Item>
							<NavDropdown.Item href="/portfolio2019">Portfolio 2019</NavDropdown.Item>
							<NavDropdown.Item href="/businesscard">Business Card</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};