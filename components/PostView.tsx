import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { DummyDataProps } from "../dummyData";
import { theme } from "./DesignSystem";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

type PostViewProps = {
  postData: DummyDataProps[];
  touchable?: boolean;
};

const PostView: React.FC<PostViewProps> = (prop) => {
  const navigation = useNavigation();
  const { postData, touchable } = prop;
  return (
    <View>
      {postData &&
        postData.map((post, i) => (
          <TouchableOpacity
            key={`post-${i}`}
            onPress={() =>
              touchable
                ? navigation.navigate("SinglePost", { postId: post.id })
                : null
            }
          >
            <View
              style={{
                flexDirection: "column",
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
            </View>
            <View
              style={{
                borderBottomWidth: 5,
                borderColor: theme.colors.lightGrey,
              }}
            />
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default PostView;
