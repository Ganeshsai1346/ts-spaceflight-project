/** @format */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, ListGroupItem, Row } from "react-bootstrap";
import { Details } from "../types/Details";

const ArticleDetails = () => {
  const [selectedArticle, setSelectedArticle] = useState<Details | null>(null);

  const params = useParams();
  console.log("PARAMS", params);
  const articleID = params.articleID;

  useEffect(() => {
    fetchArticleDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchArticleDetails = async () => {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles/" + articleID
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setSelectedArticle(data);
      } else {
        console.log("Error fetching deatils!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="text-center">
      <h2>Article Details here!!</h2>
      {selectedArticle && (
        <Container>
          <Row className="mt-5">
            <Col md={4}>
              <img
                className="details-img"
                src={selectedArticle.imageUrl}
                alt=""
                style={{ width: "300px", height: "300px" }}
              />
            </Col>
            <Col md={8} className="all-lists">
              <div className="lists text-dark">
                <ListGroupItem className="list">
                  <b>Title :</b> {selectedArticle.title}
                </ListGroupItem>
                <ListGroupItem className="list">
                  <b>News Site :</b>
                  {selectedArticle.newsSite}
                </ListGroupItem>
                <ListGroupItem className="list">
                  <b>Summary :</b>
                  {selectedArticle.summary}
                </ListGroupItem>
                <ListGroupItem className="list">
                  <b>Published At :</b>
                  {selectedArticle.publishedAt.slice(0, 10)}
                </ListGroupItem>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default ArticleDetails;
