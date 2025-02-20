const Sidebar = ({ setselecttab }) => {
  const handleonclick = (TabName) => {
    setselecttab(TabName);
  };

  return (
    <div
      className="bg-dark text-white position-fixed top-0 start-0 vh-100 p-3 "
      style={{ width: "150px" }}
    >
      <h4>Sidebar</h4>
      <ul className="list-unstyled mt-3">
        <li className="mb-3">
          <a
            href="#"
            onClick={() => handleonclick("HOME")}
            className="text-decoration-none text-white"
          >
            Home
          </a>
        </li>

        <li className="mb-3">
          <a href="#" onClick={() => handleonclick("Dashboard")} className="text-decoration-none text-white">
            Dashboard
          </a>
        </li>

        <li className="mb-3">
          <a
            href="#"
            onClick={() => handleonclick("Create Post")}
            className="text-decoration-none text-white"
          >
            Create Post
          </a>
        </li>

        <li className="mb-3">
          <a href="#" className="text-decoration-none text-white">
            Sign Out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
