import { DummyDataProps } from "./type";

export const dummyData: DummyDataProps[] = [
  {
    id: 1,
    title: "My first post",
    content: "This is my first post",
    createdAt: "01-01-2022",
    tags: ["design"],
    user: {
      id: 1,
      email: "valid@email.com",
      firstName: "John",
      lastName: "Teixeira",
      telephone: "0400000000",
    },
    likes: 0,
    comments: [
      {
        commentId: 1,
        text: "this is a comment",
        parent: "1",
        createdAt: "02-01-2022",
        user: {
          id: 11,
          email: "test@email.com",
          firstName: "George",
          lastName: "",
          telephone: "0400000000",
        },
      },
    ],
  },
  {
    id: 2,
    title: "New to React Native and need someone to teach me",
    content: "Big thanks to the team.",
    createdAt: "01-01-2022",
    tags: ["design"],
    user: {
      id: 1,
      email: "valid@email.com",
      firstName: "John",
      lastName: "Teixeira",
      telephone: "0400000000",
    },
    likes: 0,
    comments: [],
  },
];

export const TAGS = ["design", "XD", "Figma", "development"];
