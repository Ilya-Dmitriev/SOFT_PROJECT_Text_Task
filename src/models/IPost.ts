export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const nullPost: IPost = {
  userId: NaN,
  id: NaN,
  title: "Not found",
  body: "Not found",
};
