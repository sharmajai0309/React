import { useState } from "react";
import "./App.css";
import CreatePost from "./Component/CreatePost";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Post from "./Component/Post";
import PostList from "./Component/PostList";
import Sidebar from "./Component/SideBar";
import PostListProvider from "./Store/Post-list-store";
import Dashboard from "./Component/Dashboard";

function App() {
  const [currentTab, setselecttab] = useState("HOME");

  return (
    <PostListProvider>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          {/* Sidebar - Collapsible on smaller screens */}
          <div className="col-auto d-none d-lg-block ">
            <Sidebar setselecttab={setselecttab} />
          </div>

          <div className="col d-flex flex-column min-vh-100">
            <Navbar setselecttab={setselecttab} />

            <main className="flex-grow-1 p-3">
              {(() => {
                if (currentTab === "HOME") {
                  return <PostList />;
                } else if (currentTab === "Create Post") {
                  return <CreatePost />;
                } else if (currentTab === "Dashboard") {
                  return <Dashboard />
                }
              })()}
            </main>



            <Footer />
          </div>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
