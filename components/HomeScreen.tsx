import React from "react";
import { Button } from "react-native-paper";

type HomeScreenProps = {
  navigation: any;
};

const ProfileScreen: React.FC<HomeScreenProps> = (props) => {
  const { navigation } = props;
  return (
    <Button onPress={() => navigation.navigate("Profile", { name: "Jane" })}>
      Go to next page
    </Button>
  );
};

export default ProfileScreen;
