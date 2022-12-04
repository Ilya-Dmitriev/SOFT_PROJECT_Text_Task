export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const nullComment = {
  postId: NaN,
  id: NaN,
  name: "Not found",
  email: "Not found",
  body: "Not found",
};
