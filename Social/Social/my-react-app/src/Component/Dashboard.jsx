import React, { useContext } from "react";
import { Card, Button, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PostList as PostListData } from "../Store/Post-list-store";

const Dashboard = () => {
  const { postList } = useContext(PostListData);
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Admin Dashboard</h1>
      <div className="row">
        {/* Status Cards */}
        <div className="col-md-4 mb-4">
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title>Total Users</Card.Title>
              <Card.Text className="display-4">{postList.length}</Card.Text>
              <Button variant="primary">View Details</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title>Active Users</Card.Title>
              <Card.Text className="display-4">{postList.length}</Card.Text>
              <Button variant="success">View Details</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title>Inactive Users</Card.Title>
              <Card.Text className="display-4">0</Card.Text>
              <Button variant="danger">View Details</Button>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Data Table */}
      <h2 className="mt-5 mb-3">User Information</h2>
      <Table striped bordered hover responsive className="shadow-sm ">
        <thead className="bg-primary text-white">
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Content</th>
            <th>Reactions</th>
            <th>Tags</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {postList.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.Name}</td>
              <td>{item.content}</td>
              <td>{item.reaction}</td>
              <td>{item.tags.join(", ")}</td>
              <td>{item.userId}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
