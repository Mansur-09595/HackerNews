import React from "react";
import { Link } from "react-router-dom";
import { INews } from "../types/INews";
import Typography from "@mui/material/Typography/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
//Отоброжение времени
import Time from "../utils/Time";

interface Props {
  post: INews;
}

const Post: React.FC<Props> = ({ post }) => {
  return (
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
              Опубликовано: <Time time={post.time}/> | {`${post.score} балла`} |{" "}
              {typeof post.kids === "undefined"
                ? "No comments"
                : `${post.kids.length} комментарий`}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              <Link to={`/news/${post.id}`}>Подробнее...</Link>
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default Post;
