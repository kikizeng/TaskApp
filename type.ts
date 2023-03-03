export interface DummyDataProps {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  tags: string[];
  user: UserProps;
  likes: number;
  comments: CommentsProps[];
}

export interface CommentsProps {
  commentId: number;
  text: string;
  parent: string;
  createdAt: string;
  user: UserProps;
  comments?: CommentsProps[];
}

export interface UserProps {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  telephone: string;
}
