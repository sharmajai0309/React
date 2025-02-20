import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import { PostList } from "../Store/Post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <Card
      style={{ width: "20rem", margin: "8px" }}
      className="bg-light shadow-lg text"
    >

      {/* Image is displayed here */}
      <Card.Img variant="top" src={post.Image} alt={post.Image} />
      <Card.Body>
        <Card.Title>{post.Name}</Card.Title>
        <Card.Text>{post.content}</Card.Text>
        <Card.Text>
          <strong>Reactions:</strong> {post.reaction}
        </Card.Text>
        <Card.Text>
          <strong>User ID:</strong> {post.userId}
        </Card.Text>
        <Card.Text>

          <div className="d-flex flex-row flex-wrap">
            {post.tags.map((tag, index) => (
              <h5 key={index}>
                <span className="badge badge-primary text-dark mx-1">{tag}</span>
              </h5>
            ))}
          </div>
        </Card.Text>
        <div className="d-flex justify-content-center align-items-center ">
          <div className="d-flex gap-5">
            <Button variant="primary">Details</Button>
            <Button variant="danger" onClick={() => deletePost(post.id)}>Delete</Button>
          </div>
        </div>




      </Card.Body>
    </Card>
  );
};

//incoming Post props validation
Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    Image: PropTypes.string,
    reaction: PropTypes.string,
    Name: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default Post;
