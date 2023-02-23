import React from "react";
import { Text, View, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { theme } from "./DesignSystem";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { Button } from "react-native-paper";

type DummyDataProps = {
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
}[];

const dummyData: DummyDataProps = [
  {
    id: 1,
    title: "My first post",
    content: "This is my first post",
    createdAt: "2020-01-01T00:00:00.000Z",
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

const ForumScreen: React.FC = () => {
  // const { navigation } = props;
  return (
    <View>
      <View
        style={{
          paddingHorizontal: 15,
          paddingTop: 30,
        }}
      >
        <StatusBar style="auto" />
        <Text
          style={{
            fontFamily: "syne-semibold",
            fontSize: 25,
            color: theme.colors.charcoal,
            textAlign: "center",
          }}
        >
          Forum
        </Text>
        <View
          style={{
            marginVertical: 15,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: theme.colors.lightGrey,
            borderRadius: 0,
          }}
        >
          <MaterialIcons
            name="search"
            size={24}
            color={theme.colors.charcoal}
            style={{ paddingLeft: 5, paddingRight: 2, opacity: 0.5 }}
          />
          <TextInput
            inlineImageLeft="search_icon"
            placeholder="Search"
            placeholderTextColor={theme.colors.charcoal}
            style={{
              borderRadius: 0,
              backgroundColor: theme.colors.lighterGrey,
              marginTop: 11,
              marginBottom: 12,
              fontSize: 14,
              fontFamily: "syne-bold",
              textTransform: "uppercase",
              color: theme.colors.charcoal,
              opacity: 0.5,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingBottom: 17,
          }}
        >
          <Button
            style={{
              borderRadius: 0,
              backgroundColor: theme.colors.blue,
              marginRight: 10,
            }}
          >
            <Text
              style={{
                color: theme.colors.offWhite,
                fontFamily: "syne-regular",
                fontSize: 14,
              }}
            >
              Tag 1
            </Text>
          </Button>
          <Button
            style={{
              borderRadius: 0,
              backgroundColor: theme.colors.lightGrey,
            }}
          >
            <Text
              style={{
                color: theme.colors.charcoal,
                fontFamily: "syne-regular",
                fontSize: 14,
              }}
            >
              Tag 2
            </Text>
          </Button>
        </View>
      </View>
      <View
        style={{ borderBottomWidth: 5, borderColor: theme.colors.lightGrey }}
      />
      {dummyData &&
        dummyData.map((post, i) => (
          <View
            key={`post-${i}`}
            style={{
              paddingVertical: 25,
            }}
          >
            <View
              style={{
                paddingHorizontal: 15,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontFamily: "syne-bold", fontSize: 14 }}>
                  {post?.user?.firstName} {post?.user?.lastName}
                </Text>
                <View
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: 100,
                    backgroundColor: theme.colors.blue,
                    marginHorizontal: 5,
                  }}
                />

                <Text
                  style={{
                    fontFamily: "syne-bold",
                    color: theme.colors.charcoal,
                    opacity: 0.5,
                  }}
                >
                  {post?.createdAt}
                </Text>
              </View>
              <Text
                style={{
                  fontFamily: "syne-semibold",
                  fontSize: 25,
                  paddingVertical: 10,
                }}
              >
                {post?.title?.length > 40
                  ? post.title.slice(0, 40) + "..."
                  : post?.title}
              </Text>
              <Button
                style={{
                  borderRadius: 0,
                  backgroundColor: theme.colors.blue,
                  width: 20,
                }}
              >
                <Text
                  style={{
                    color: theme.colors.offWhite,
                    fontFamily: "syne-regular",
                    fontSize: 14,
                  }}
                >
                  {post?.tags[0]}
                </Text>
              </Button>
              <Text
                style={{
                  paddingVertical: 10,
                  fontFamily: "syne-regular",
                  color: theme.colors.charcoal,
                  fontSize: 14,
                }}
              >
                {post?.content}
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Feather
                  style={{ color: theme.colors.charcoal }}
                  name="message-square"
                ></Feather>
                <Text style={{ marginLeft: 6 }}>{post.comments}</Text>
              </View>
            </View>
            <View
              style={{
                borderBottomWidth: 5,
                paddingVertical: 6,
                borderColor: theme.colors.lightGrey,
              }}
            />
          </View>
        ))}
    </View>
  );
};

export default ForumScreen;
