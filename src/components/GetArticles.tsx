/** @format */
import { News } from "../types/News";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleArticle from "./SingleArticle";

const GetArticles = () => {
  const [articles, setArticles] = useState<News[]>([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );

      if (response.ok) {
        const data = await response.json();

        setArticles(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <p className="paragraph text-center">Flight Details</p>
      <Row className="mt-1">
        {articles.slice(0, 8).map((article, i) => (
          <Col md={3} key={i}>
            <SingleArticle news={article} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GetArticles;
