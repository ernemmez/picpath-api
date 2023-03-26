interface IAuthor {
  id: string;
  username: string;
  imageUrl: string;
}

interface IPost {
  id: string;
  sharedDate: string;
  author: IAuthor;
  desc: string;
  pointId: string;
  likes: [
    {
      userId: string;
      likedDate: string;
    }
  ];
  comments: [
    {
      userId: string;
      commentDate: string;
      commentText: string;
    }
  ];
  imageUrls: string[];
}

interface IPoint {
  id: string;
  name: string;
  author: IAuthor;
  createdDate: string;
  location: {
    lat: number;
    long: number;
  };
  sharedPosts: IPost[];
}

export { IAuthor, IPost, IPoint };
