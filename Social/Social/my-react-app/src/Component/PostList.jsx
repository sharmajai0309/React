import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/Post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListData);
  console.log(postList); // Use the correct context

  return (
    <>
      <div className="flex-grow-1 py-5">
        <h1>Welcome to Post page</h1>
      </div>
      <div className="d-flex flex-wrap gap-5 sha">
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};
export default PostList;
