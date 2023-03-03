import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ForumScreen from "./ForumScreen";
import SinglePostScreen from "./SinglePostScreen"; // replace with your actual component

const Stack = createStackNavigator();

const ForumStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Forum"
        component={ForumScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SinglePost"
        component={SinglePostScreen}
        options={{ title: "Single Post" }}
      />
    </Stack.Navigator>
  );
};

export default ForumStack;
