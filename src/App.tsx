import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { getPost } from "./store/reducers/newsAction";
import PostList from "./componets/PostList";
import Comments from "./componets/Comments";
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();
  const { news, isLoading } = useAppSelector((state) => state.news);
  const { comments } = useAppSelector((state) => state.news.comments);

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getPost());
    }, 60000);
    return () => clearInterval(interval);
  }, [getPost]);

  return (
    <div className="App">
      {isLoading ? (
        <Box
          sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh",}}>
          <h1 style={{ margin: "0 50px" }}>HACKER NEWS</h1>
          <CircularProgress size={"100px"} />
        </Box>
      ) : (
        <Routes>
          <Route path="/" element={<PostList news={news} />} />
          <Route
            path="/news/:id"
            element={<Comments news={news} comments={comments} />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
