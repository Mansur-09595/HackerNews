import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../utils/API";
import { INews, IComment } from "../../types/INews";

//Получение постов
export const getPost = createAsyncThunk(
  "news/get", async function () {
  const res = await fetch(`${baseUrl}/v0/topstories.json/?print=pretty`);
  const postIds: number[] = await res.json();
  const posts: INews[] = await Promise.all(
    postIds.slice(0, 100).map(async (postId) => {
      const res = await fetch(`${baseUrl}/v0/item/${postId}.json?print=pretty`);
      return await res.json();
    })
  );
  return posts;
});

//Получение комментарий
export const getComment = createAsyncThunk(
  "comment/get",
  async function (postId: number) {
    const response = await fetch(`${baseUrl}/v0/item/${postId}.json?print=pretty`);
    const postData = await response.json();
    const commentIds = postData.kids;
    const comments = await Promise.all(commentIds.map(async (id: number) => {
      const commentResponse = await fetch(`${baseUrl}/v0/item/${id}.json?print=pretty`);
      return commentResponse.json();
    }));
    return comments;
  }
);

//Получение вложенных комментарий
export const fetchCommentReplies = async (comment: IComment): Promise<IComment[]> => {
  if (comment.kids && comment.kids.length > 0) {
    const response = await fetch(`${baseUrl}/v0/item/${comment.id}.json?print=pretty`);
    const postData = await response.json();
    const commentIds = postData.kids;
    const comments = await Promise.all(commentIds.map(async (id: number) => {
      const commentResponse = await fetch(`${baseUrl}/v0/item/${id}.json?print=pretty`);
      return commentResponse.json();
    }));
    return comments;
  }
  return [];
};