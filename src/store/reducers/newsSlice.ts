import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPost, getComment } from "./newsAction";
import { INews, IComment, newsState } from "../../types/INews";

const initialState: newsState = {
  news: [],
  comments: {
    comments: [],
    isLoadingComment: false,
    error: null,
  },
  isLoading: false,
  isLoadingComment: false,
  error: null,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //getPost
    builder.addCase(getPost.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getPost.fulfilled,
      (state, action: PayloadAction<INews[]>) => {
        state.isLoading = false;
        state.news = action.payload;
      }
    );
    builder.addCase(getPost.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Something went wrong";
    });
    //getComments
    builder.addCase(getComment.pending, (state) => {
      state.comments.isLoadingComment = true;
      state.comments.comments = [];
    });
    builder.addCase(
      getComment.fulfilled,
      (state, action: PayloadAction<IComment[]>) => {
        state.comments.isLoadingComment = false;
        state.comments.comments = action.payload;
      }
    );
    builder.addCase(getComment.rejected, (state, action) => {
      state.comments.isLoadingComment = false;
      state.comments.error = action.error.message || "Something went wrong";
    });
  },
});

export default newsSlice.reducer;
