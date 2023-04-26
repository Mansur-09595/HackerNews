import React from "react";
import { INews } from "../types/INews";
import Post from "./Post";
import { Grid } from "@mui/material";
import Navbar from "../pages/Navbar";

interface PostListProps {
  news: INews[];
}

const PostList: React.FC<PostListProps> = ({ news }) => {
  //Сортировка поста по дате, самые свежие сверху
  const sortedPosts = [...news].sort(
    (a, b) => (b.time as number) - (a.time as number)
  );

  return (
    <>
      <Navbar />
      <Grid container spacing={4} sx={{ padding: "5vh 0" }}>
        {sortedPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Grid>
    </>
  );
};

export default PostList;
