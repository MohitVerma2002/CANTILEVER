import React from 'react';
import { Container, Navbar, Nav, Dropdown, Form, FormControl, Button } from "react-bootstrap";
import "./navbar.css";
import { NavLink } from 'react-router-dom';

const NavBar = ({ onCategoryClick, onSearch, user, onLogout }) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <Navbar expand="lg" className="mb-4 navbar">
      <Container>
        <Navbar.Brand href="/" className="fw-bold fs-4 title"><span> <span>ARTICLE</span>.now</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Dropdown className='dropdown'>
              <Dropdown.Toggle variant="outline-primary" className="custom-dropdown-toggle">Categories</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => onCategoryClick("world")}>World</Dropdown.Item>
                <Dropdown.Item onClick={() => onCategoryClick("business")}>Business</Dropdown.Item>
                <Dropdown.Item onClick={() => onCategoryClick("sports")}>Sports</Dropdown.Item>
                <Dropdown.Item onClick={() => onCategoryClick("technology")}>Technology</Dropdown.Item>
                <Dropdown.Item onClick={() => onCategoryClick("entertainment")}>Entertainment</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          <Form onSubmit={handleSearchSubmit} className="d-flex mx-auto">
            <FormControl 
              type="text" 
              className="me-2" 
              placeholder="Search" 
              value={searchTerm}
              onChange={handleSearchChange} 
            />
            <Button variant="outline-primary" className='searchBtn' type="submit">Search</Button>
          </Form>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/"> <span className='navItems'>Home</span></Nav.Link>
            <Nav.Link as={NavLink} to="/about"> <span className='navItems'>About</span></Nav.Link>
            <Nav.Link as={NavLink} to="/contact"> <span className='navItems'>Contact</span></Nav.Link>
            {user ? (
              <>
                <Navbar.Text className='navItems'> Hi, {user.email}</Navbar.Text>
                <Button variant="outline-primary" onClick={onLogout} className='navItems logoutBtn'>Logout</Button>
              </>
            ) : (
              <Nav.Link as={NavLink} to="/login"><span className='navItems'>Login</span></Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
