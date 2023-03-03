export interface DummyDataProps {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  tags: string[];
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    telephone: string;
  };
  likes: number;
  comments: number;
}

export const dummyData: DummyDataProps[] = [
  {
    id: 1,
    title: "My first post",
    content: "This is my first post",
    createdAt: "01-01-2022",
    tags: ["tag1", "tag2"],
    user: {
      id: 1,
      email: "valid@email.com",
      firstName: "John",
      lastName: "Teixeira",
      telephone: "0400000000",
    },
    likes: 0,
    comments: 0,
  },
  {
    id: 2,
    title: "New to React Native and need someone to teach me",
    content: "Big thanks to the team.",
    createdAt: "01-01-2022",
    tags: ["tag1", "tag2"],
    user: {
      id: 1,
      email: "valid@email.com",
      firstName: "John",
      lastName: "Teixeira",
      telephone: "0400000000",
    },
    likes: 0,
    comments: 0,
  },
];
