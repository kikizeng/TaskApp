import React from "react";
import { Text, View } from "react-native";
import { dummyData, DummyDataProps } from "../dummyData";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { smallContainer } from "./DesignSystem";
import PostView from "./PostView";
interface Props {
  post: DummyDataProps;
}

const SinglePostScreen: React.FC<Props | any> = ({ route }) => {
  const { postId } = route.params;
  const navigation = useNavigation();

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
          style={(smallContainer.container, { width: "33.3%" })}
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
      <PostView
        touchable={false}
        postData={dummyData.filter((i) => i.id === postId)}
      />
    </View>
  );
};

export default SinglePostScreen;
