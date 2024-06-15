import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import NewsData from "../newsData/NewsData";
import CustomPagination from "../pagination/CustomPagination";
import "./newslist.css";

const NewsList = (props) => {
  const { category, searchTerm } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const { newsData, loading, error } = NewsData(category, searchTerm);

  if (loading) {
    return <div className="loading">Loading.........</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  const totalArticles = newsData.length;
  const totalPages = Math.ceil(totalArticles / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentArticles = newsData.slice(startIndex, endIndex);

  return (
    <Container>
      <Row>
        {currentArticles?.map((article, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <Card className="mb-4 fixed-height-card">
              <Card.Img variant="top" src={article.image} alt="news image" />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
                <Card.Link href={article.url} target="_blank">
                  Read more
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <CustomPagination
        currentPage={currentPage}
        handlePageClick={handlePageClick}
        totalPages={totalPages}
      />
    </Container>
  );
};

export default NewsList;
