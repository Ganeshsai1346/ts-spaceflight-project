/** @format */

import { News } from "../types/News";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface SingleArticleProps {
  news: News;
}
const SingleArticle = ({ news }: SingleArticleProps) => {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate("/ArticleDetails/" + news.id);
  };
  return (
    <>
      <Card id="card" onClick={goToDetails}>
        <Card.Img className="card-img mt-3" src={news.imageUrl} />
      </Card>
    </>
  );
};

export default SingleArticle;
