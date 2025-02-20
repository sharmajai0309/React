import { useContext, useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { PostList } from "../Store/Post-list-store";

const CreatePost = () => {

  const { createPost } = useContext(PostList);



  const [post, setPost] = useState({
    id: "",
    Name: "",
    content: "",
    reaction: "",
    Image: "",
    userId: "",
    tags: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalPost = {
      ...post,
      tags: post.tags.split(",").map(tag => tag.trim()),
      id: [...(post.id || []), Math.floor(1000 + Math.random() * 9000)]
    };
    createPost(finalPost);

    alert("Post Created Successfully!");
  };

  return (
    <Container className="mt-5">
      <Card className="shadow-lg  rounded">
        <h2 className="text-center mb-4 text-primary">Create a New Post</h2>
        <Form onSubmit={handleSubmit}>


          <Form.Group className="mb-3">
            <Form.Control type="text" name="Name" value={post.Name} onChange={handleChange} placeholder="Title" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={3} name="content" value={post.content} onChange={handleChange} placeholder="Content" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="number" name="reaction" value={post.reaction} onChange={handleChange} placeholder="Reactions" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="text" name="Image" value={post.Image} onChange={handleChange} placeholder="Image URL" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="text" name="userId" value={post.userId} onChange={handleChange} placeholder="User ID" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="text" name="tags" value={post.tags} onChange={handleChange} placeholder="Tags (comma-separated)" />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Create Post
          </Button>
        </Form>
      </Card>

      {/* Post Preview */}
      {post.Name && (
        <Card className="mt-5 shadow p-3">
          <Card.Img variant="top" src={post.Image} alt="Post Image" className="rounded" />
          <Card.Body>
            <Card.Title>{post.Name}</Card.Title>
            <Card.Text>{post.content}</Card.Text>
            <p className="text-muted">Reactions: {post.reaction}</p>
            <p className="text-primary">Tags: {post.tags}</p>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default CreatePost;
