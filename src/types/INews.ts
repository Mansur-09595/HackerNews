export interface INews {
  by: string;
  descendants: number;
  id: number;
  kids: Array<number>;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

export interface IComment {
  by: string;
  id: number;
  parent: number;
  text: string;
  time: number;
  type: string;
  kids?: Array<number>;
}

export type newsState = {
  news: INews[];
  comments: {
    comments: IComment[];
    isLoadingComment: boolean;
    error: boolean | number | string | null;
  };
  isLoading: boolean;
  isLoadingComment: boolean;
  error: boolean | number | string | null;
};
