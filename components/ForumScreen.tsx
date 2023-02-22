import React from "react";
import { Text } from "react-native";

type ForumScreenProps = {
  navigation: any;
  // route: string;
};

const ForumScreen: React.FC<ForumScreenProps> = (props) => {
  const { navigation } = props;
  return <Text>Forum</Text>;
};

export default ForumScreen;
