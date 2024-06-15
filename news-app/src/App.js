import React, { useState, useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import {Routes, Route } from "react-router-dom";
import NewsList from "./components/newsList/NewsList";
import NavBar from "./components/navbar/NavBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { auth, onAuthStateChange, logOut } from "./firebase";
import "./App.css";
import Footer from "./components/footer/Footer";
import AboutPage from "./pages/about/About";
import ContactPage from "./pages/contact/Contact";

function App() {
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChange((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleCategoryClick = (category) => {
    setCategory(category);
    setSearchTerm("");
  };

  const handleSearch = (searchTerm) => {
    setCategory("");
    setSearchTerm(searchTerm);
  };

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="App">
      
      <NavBar
        onCategoryClick={handleCategoryClick}
        onSearch={handleSearch}
        user={user}
        onLogout={handleLogout}
      />
      <Container>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/"
            element={
              <Row>
                <Col xs={12} md={3} className="columnLeft">
                  <h5>Categories</h5>
                  <Nav className="flex-column">
                    <Nav.Link onClick={() => handleCategoryClick("world")}>
                      World
                    </Nav.Link>
                    <Nav.Link onClick={() => handleCategoryClick("business")}>
                      Business
                    </Nav.Link>
                    <Nav.Link onClick={() => handleCategoryClick("sports")}>
                      Sports
                    </Nav.Link>
                    <Nav.Link onClick={() => handleCategoryClick("technology")}>
                      Technology
                    </Nav.Link>
                    <Nav.Link onClick={() => handleCategoryClick("entertainment")}>
                      Entertainment
                    </Nav.Link>
                  </Nav>
                </Col>
                <Col xs={12} md={9}>
                  <NewsList category={category} searchTerm={searchTerm} />
                </Col>
              </Row>
            }
          />
          </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
