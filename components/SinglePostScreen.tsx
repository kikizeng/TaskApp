import React from "react";
import { Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { smallContainer, theme } from "./DesignSystem";
import PostView from "./PostView";
import { DummyDataProps } from "../type";
import { dummyData } from "../dummyData";
interface Props {
  post: DummyDataProps;
}

const SinglePostScreen: React.FC<Props | any> = ({ route }) => {
  const { postId } = route.params;
  const navigation = useNavigation();
  const singlePostData = dummyData.filter((i) => i.id === postId);

  return (
    <View style={{ paddingTop: 48 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <AntDesign
          style={
            (smallContainer.container, { width: "33.3%", paddingLeft: 15 })
          }
          name="arrowleft"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <View
          style={{
            width: "33.3%",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              paddingHorizontal: 10,
              fontFamily: "syne-semibold",
              fontSize: 25,
            }}
          >
            Post
          </Text>
        </View>

        <Text
          style={{
            width: "33.3%",
          }}
        ></Text>
      </View>
      <PostView touchable={false} postData={singlePostData} hideTitle={false} />
      <View style={smallContainer.container}>
        <Text
          style={{
            paddingTop: 10,
            fontFamily: "syne-extra-bold",
            fontSize: 14,
            fontWeight: "900",
            textTransform: "uppercase",
          }}
        >
          {singlePostData[0]?.comments.length > 0 ? "Comments" : "No Comments"}
        </Text>
        {singlePostData[0]?.comments.map((comment, i) => (
          <View>
            <View
              style={{
                paddingVertical: 7,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ fontFamily: "syne-bold", fontSize: 14 }}>
                {comment?.user?.firstName} {comment?.user?.lastName}
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
                {comment?.createdAt}
              </Text>
            </View>
            <Text style={{ fontFamily: "syne-regular", fontSize: 14 }}>
              {comment?.text}
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
              <TextInput
                inlineImageLeft="search_icon"
                placeholder="Write a reply ..."
                placeholderTextColor={theme.colors.charcoal}
                style={{
                  borderRadius: 0,
                  backgroundColor: theme.colors.lightGrey,
                  marginTop: 11,
                  marginBottom: 12,
                  marginLeft: 5,
                  fontSize: 14,
                  fontFamily: "syne-bold",
                  textTransform: "uppercase",
                  color: theme.colors.charcoal,
                  opacity: 0.5,
                }}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default SinglePostScreen;
