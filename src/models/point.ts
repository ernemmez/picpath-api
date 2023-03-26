import type { IAuthor, IPoint, IPost } from "./types";

class Point implements IPoint {
  id: string;
  name: string;
  author: IAuthor;
  createdDate: string;
  location: {
    lat: number;
    long: number;
  };
  sharedPosts: IPost[];
  constructor(
    id: string,
    name: string,
    createdDate: string,
    sharedPosts: IPost[],
    author: IAuthor,
    location: { lat: number; long: number }
  ) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.createdDate = createdDate;
    this.location = location;
    this.sharedPosts = sharedPosts;
  }
}

export default Point;
