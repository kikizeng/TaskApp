import React from "react";
import { Text } from "react-native";

type ForumScreenProps = {
  navigation: any;
  route: string;
};

const ForumScreen: React.FC<ForumScreenProps> = ({ navigation, route }) => {
  return <Text>This is {route}'s profile</Text>;
};

export default ForumScreen;
