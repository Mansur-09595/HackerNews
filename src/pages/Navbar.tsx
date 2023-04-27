import React, { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import { useAppDispatch } from "../hooks/hooks";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { getPost } from "../store/reducers/newsAction";

const Navbar = () => {
  const [isBlack, setIsBlack] = useState(false);

  const toggleBackground = () => {
    setIsBlack((prev) => !prev);
    document.body.classList.toggle("black-background");
  };

  const dispatch = useAppDispatch();
  const refreshNews = () => {
    dispatch(getPost());
  };

  return (
    <React.Fragment>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Button variant="contained" color="success" onClick={refreshNews}>Обновить</Button>
        <Link to="/">
          <button className="button">
            <h1>HACKER NEWS</h1>
          </button>
        </Link>
        <div className="container">
          <label className="switch">
            <input onClick={toggleBackground} type="checkbox" />
            <div className={`index.css ${isBlack ? "black-background" : ""}`}
            ></div>
          </label>
        </div>
      </Toolbar>
    </React.Fragment>
  );
};

export default Navbar;
