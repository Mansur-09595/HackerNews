import React, { useState, useEffect } from "react";
import { IComment } from "../types/INews";
import { Button } from "@mui/material";
import { fetchCommentReplies } from "../store/reducers/newsAction";
import Time from "../utils/Time";

interface CommentProps {
  comment: IComment;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  const [replies, setReplies] = useState<IComment[]>([]);
  const [showReplies, setShowReplies] = useState(false);

  useEffect(() => {
    const fetchReplies = async () => {
      const comments = await fetchCommentReplies(comment);
      setReplies(comments);
    };
    fetchReplies();
  }, [comment]);

  const toggleReplies = () => {
    setShowReplies(!showReplies);
  }
  
  return (
    <div >
      <h4>{`Автор: ${comment.by}`} | <Time time={comment.time}/><hr /> </h4>
      <p dangerouslySetInnerHTML={{__html: `${comment.text}`}}></p>
      {replies.length > 0 && (
        <Button sx={{margin: '10px'}} variant="contained" onClick={(e) => {e.preventDefault(); toggleReplies();}}>
          {showReplies ? "Закрыть" : `Открыть ${replies.length === 1 ? " " : replies.length}`}
        </Button>
      )}
      <div style={{ padding: showReplies ? "20px" : "0px", border: showReplies ? "1px solid gray" : "none"}}>
      {showReplies && replies.map((reply) => (
        <div key={reply.id}>
          <Comment comment={reply} />
        </div>
      ))}
      </div>
    </div>
  );
};
export default Comment;
