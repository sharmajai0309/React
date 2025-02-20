/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";


// Default posts list data
const Default_PostList = [
  {
    id: Math.floor(1000 + Math.random() * 9000),
    Name: "Trip to J&K",
    content: "This is the first post",
    reaction: "2",
    Image:
      "https://th.bing.com/th/id/OSK.HEROPONOvZcPCQ_ONiO3B5fwQiGZInuvtPK07AkgMLxy3Fxs?rs=1&pid=ImgDetMain",
    userId: "1",
    tags: ["#Indian", "#jammu", "#Kashmir"],
  },
  {
    id: Math.floor(1000 + Math.random() * 9000),
    Name: "Trip to Ladhak",
    content: "Budget friendly trip to High altitude",
    reaction: "10",
    Image:
      "https://th.bing.com/th/id/OSK.HERO9JzI2pszNJnxruBn3Gnfg_OpdIv7FgNZai1gSlPzILM?rs=1&pid=ImgDetMain",
    userId: "2",
    tags: ["#India", "#Ladhak", "#altitude"],
  },
  {
    id: Math.floor(1000 + Math.random() * 9000),
    Name: "Trip to Kullu",
    content: "Budget friendly trip to  Kullu",
    reaction: "15",
    Image:
      "https://www.tripsavvy.com/thmb/zyqX35L3rgFRuVrbGioDKoqPezc=/2121x1414/filters:fill(auto,1)/GettyImages-930881934-5ae56fe48023b90036464e72.jpg",
    userId: "3",
    tags: ["#India", "#Ladhak", "#altitude"],
  },

];


// Reducer for managing the post list (not used yet)
const postListReducer = (currpostList, action) => {
  let newPostList = currpostList;
  if (action.type === "DELETE_POST") {
    newPostList = currpostList.filter((Post) => Post.id !== action.payload.postid);
  }
  if (action.type === "ADD_POST") {
    newPostList = [...currpostList, action.payload.post]
  }

  return newPostList;
};

// Creating the postList context
export const PostList = createContext({
  postList: [],
  addPost: () => { },
  deletePost: () => { },
  // Other methods for managing the post list go here...
});

// PostListProvider component
const PostListProvider = ({ children }) => {


  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    Default_PostList
  );


  const addPost = () => {
    // Add logic to add a new post to the postList
    console.log("Add post called");
  };

  const deletePost = (postid) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postid,
      },
    });

    console.log("Delete post called for" + postid);
  };
  const createPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        post,
      },
    })
    console.log("Post Created:", post);
  }


  return (
    <PostList.Provider
      value={{
        postList: postList, // Use postListState.postList here
        addPost: addPost,
        deletePost: deletePost,
        createPost: createPost
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
