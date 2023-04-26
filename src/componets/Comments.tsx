import React, { useEffect } from "react";
import { useAppDispatch } from "../hooks/hooks";
import { Link, useParams } from "react-router-dom";
import { INews, IComment } from "../types/INews";
import { getComment } from "../store/reducers/newsAction";
import Navbar from "../pages/Navbar";
import Comment from "./Comment";
import Typography from "@mui/material/Typography/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
//Отоброжение времени
import Time from "../utils/Time";

interface CommentsProps {
  news: INews[];
  comments: IComment[];
}

const Comments: React.FC<CommentsProps> = ({ news, comments }) => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const post = news.find((post) => post.id === Number(id));

  useEffect(() => {
    dispatch(getComment(Number(id)));
  }, [dispatch, id]);

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <>
      <Navbar />
      <Grid item xs={12} md={6}>
        <CardActionArea component="a" href="#">
          <Card sx={{ display: "flex" }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {`Автор: ${post.by}`}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Опубликовано: <Time time={post.time} /> |{" "}
                {`${post.score} балла`} |{" "}
                {typeof post.kids === "undefined"
                  ? "No comments"
                  : `${post.kids.length} комментарий`}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                <Link to={post.url}>Ссылка на источник</Link>
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ display: "flex", margin: "5vh 0" }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h2" variant="h5">
                Комментарии
              </Typography>
              {comments.length === 0 ? (
                <Typography variant="subtitle1" color="text.secondary">
                  Нет комментариев
                </Typography>
              ) : (
                comments.map((comment) => (
                  <Comment key={comment.id} comment={comment} />
                ))
              )}
            </CardContent>
          </Card>
          
        </CardActionArea>
      </Grid>
    </>
  );
};

export default Comments;
