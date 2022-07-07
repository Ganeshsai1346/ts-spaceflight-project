/** @format */
import { Jumbotron, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <Jumbotron id="jumbotron">
        <p className="text-center jumb-heading mt-1">Space Travel</p>
        <div className="text-center mt-5 ">
          <Button className="button" onClick={() => navigate("/articles")}>
            Articles
          </Button>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Home;
