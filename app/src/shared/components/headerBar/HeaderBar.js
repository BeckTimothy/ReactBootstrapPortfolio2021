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
				<Navbar.Brand href="#home">Timothy Beck</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="">Portfolio</Nav.Link>
						<Nav.Link href="">Experiences</Nav.Link>
						<Nav.Link href="">About Me</Nav.Link>
						<NavDropdown title="Projects" id="collasible-nav-dropdown">
							<NavDropdown.Item href="">All Projects</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="">NMSAVIN</NavDropdown.Item>
							<NavDropdown.Item href="">ABQ Veterans</NavDropdown.Item>
							<NavDropdown.Item href="">Portfolio 2021</NavDropdown.Item>
							<NavDropdown.Item href="">Portfolio 2019</NavDropdown.Item>
							<NavDropdown.Item href="">Business Card</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};